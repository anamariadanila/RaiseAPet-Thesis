// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@thirdweb-dev/contracts/extension/Permissions.sol";

contract DonateToCause is Permissions {
  constructor() {
    _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);
  }

  bytes32 public constant DONATOR_ROLE = keccak256("DONATOR_ROLE");

  enum CauseStatus {
    Open,
    Deleted
  }

  struct Cause {
    address owner;
    address[] donators;
    string ownerName;
    string title;
    string description;
    string image;
    string category;
    string ONGDescription;
    uint256 goal;
    uint256 deadline;
    uint256 totalDonated;
    uint256[] donations;
    CauseStatus status;
  }

  struct Donators {
    address owner;
    uint256 amount;
    uint256 deadline;
    bool refunding;
  }

  mapping(uint256 => Cause) public causes;
  mapping(uint256 => Donators[]) public donatorsOf;

  uint256 public causeCount = 0;
  uint256 public numberOfCauses;

  function createCause(
    address _owner,
    string memory _title,
    string memory _description,
    uint256 _goal,
    uint256 _deadline,
    string memory _image,
    string memory _category,
    string memory _ownerName,
    string memory _ONGDescription
  
    
  ) public onlyRole(DEFAULT_ADMIN_ROLE) {
    Cause storage cause = causes[causeCount];

    require(_goal > 0, "Goal must be greater than 0");
    require(_deadline > block.timestamp, "Deadline must be in the future");
    require(bytes(_title).length > 0, "Title must not be empty");
    require(bytes(_description).length > 0, "Description must not be empty");
    require(bytes(_image).length > 0, "Image must not be empty");

    cause.owner = _owner;
    cause.title = _title;
    cause.description = _description;
    cause.goal = _goal;
    cause.deadline = _deadline;
    cause.image = _image;
    cause.category = _category;
    cause.status = CauseStatus.Open;
    cause.totalDonated = 0;
    cause.ownerName = _ownerName;
    cause.ONGDescription = _ONGDescription;

    causeCount++;
    numberOfCauses = causeCount - 1;
  }

  function donateToCause(uint256 _id) public payable onlyRole(DONATOR_ROLE) {
    Cause storage cause = causes[_id];
    require(cause.status == CauseStatus.Open, "Cause must be open");
    require(msg.value > 0, "Donation must be greater than 0");
    cause.donators.push(msg.sender);
    cause.donations.push(msg.value);

    (bool success, ) = payable(cause.owner).call{ value: msg.value }("");
    // Best practice: payment least. Why do we need a message with the ammount that the donator sent if he know how much he sent.
    if (success) {
      cause.totalDonated += msg.value;
    }
  }

  function updateCause(
    uint256 _id,
    string memory _title,
    string memory _description,
    string memory _image,
    uint256 deadline
  ) public onlyRole(DEFAULT_ADMIN_ROLE) {
    require(
      msg.sender == causes[_id].owner,
      "You are not the owner of this cause"
    );
    require(bytes(_title).length > 0, "Title must not be empty");
    require(bytes(_description).length > 0, "Description must not be empty");
    require(bytes(_image).length > 0, "Image must not be empty");
    require(deadline > block.timestamp, "Deadline must be in the future");

    causes[_id].title = _title;
    causes[_id].description = _description;
    causes[_id].image = _image;
    causes[_id].deadline = deadline;
  }

  function refund(uint256 _id) internal {
    // for consuma mult gas - refactorizare
    for (uint256 i = 0; i < donatorsOf[_id].length; i++) {
      address _owner = donatorsOf[_id][i].owner;
      uint256 _amount = donatorsOf[_id][i].amount;
      donatorsOf[_id][i].refunding = true;
      donatorsOf[_id][i].deadline = block.timestamp + 1 days;
      (bool success, ) = payable(_owner).call{ value: _amount }("");
      require(success, "Transfer failed.");
      causeCount -= 1;
    }
  }

  function deleteCause(uint256 _id) public onlyRole(DEFAULT_ADMIN_ROLE) {
    require(causes[_id].status == CauseStatus.Open, "Cause must be open");
    require(
      msg.sender == causes[_id].owner,
      "You are not the owner of this cause"
    );
    causes[_id].status = CauseStatus.Deleted;
    refund(_id);
  }

  function getDonators(
    uint256 _id
  ) public view returns (address[] memory, uint256[] memory) {
    return (causes[_id].donators, causes[_id].donations);
  }

  function getCauses() public view returns (Cause[] memory) {
    Cause[] memory allCauses = new Cause[](causeCount);
    for (uint256 i = 0; i < causeCount; i++) {
      allCauses[i] = causes[i];
    }
    return allCauses;
  }
}
