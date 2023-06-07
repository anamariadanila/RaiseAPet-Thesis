-- CreateTable
CREATE TABLE "Users" (
    "id" SERIAL NOT NULL,
    "ongCode" TEXT,
    "password" TEXT,
    "address" TEXT NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_ongCode_key" ON "Users"("ongCode");

-- CreateIndex
CREATE UNIQUE INDEX "Users_address_key" ON "Users"("address");
