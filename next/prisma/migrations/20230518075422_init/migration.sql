-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "ongCode" TEXT,
    "password" TEXT,
    "address" TEXT NOT NULL,
    "type" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_ongCode_key" ON "User"("ongCode");

-- CreateIndex
CREATE UNIQUE INDEX "User_address_key" ON "User"("address");
