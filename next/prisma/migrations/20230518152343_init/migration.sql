/*
  Warnings:

  - You are about to drop the column `password` on the `Users` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Users" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "ongCode" TEXT,
    "address" TEXT NOT NULL,
    "type" TEXT NOT NULL
);
INSERT INTO "new_Users" ("address", "id", "ongCode", "type") SELECT "address", "id", "ongCode", "type" FROM "Users";
DROP TABLE "Users";
ALTER TABLE "new_Users" RENAME TO "Users";
CREATE UNIQUE INDEX "Users_ongCode_key" ON "Users"("ongCode");
CREATE UNIQUE INDEX "Users_address_key" ON "Users"("address");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
