/*
  Warnings:

  - You are about to drop the `AllUsers` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "AllUsers";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "All" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "ongCode" TEXT,
    "password" TEXT,
    "address" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "idOng" INTEGER
);

-- CreateIndex
CREATE UNIQUE INDEX "All_ongCode_key" ON "All"("ongCode");

-- CreateIndex
CREATE UNIQUE INDEX "All_address_key" ON "All"("address");
