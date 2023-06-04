-- CreateTable
CREATE TABLE "AllUsers" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "ongCode" TEXT,
    "password" TEXT,
    "address" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "idOng" INTEGER
);

-- CreateIndex
CREATE UNIQUE INDEX "AllUsers_ongCode_key" ON "AllUsers"("ongCode");

-- CreateIndex
CREATE UNIQUE INDEX "AllUsers_address_key" ON "AllUsers"("address");
