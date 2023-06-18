import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import moment from "moment";
import Identicon from "react-identicons";
import { truncate } from "../utils/functions";

export default function TableDonatorsOng({ donators }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontSize: "18px" }}>Donator</TableCell>
            <TableCell align="right" sx={{ fontSize: "18px" }}>
              Amount
            </TableCell>
            <TableCell align="right" sx={{ fontSize: "18px" }}>
              Time
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {donators.map((donator) => (
            <TableRow
              key={donator[0]}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row" sx={{ fontSize: "18px" }}>
                <Box
                  sx={{
                    mr: "1rem",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Box sx={{ mr: "1rem" }}>
                    <Identicon string={donator[0]} size={30} />
                  </Box>
                  {truncate(donator[0], 8, 8, 19)}
                  {/* {donator[0]} */}
                </Box>
              </TableCell>
              <TableCell align="right" sx={{ fontSize: "18px" }}>
                {donator[3]} ETH
              </TableCell>
              <TableCell align="right" sx={{ fontSize: "18px" }}>
                {moment(donator[2]).fromNow()}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
