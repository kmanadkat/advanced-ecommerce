-- CreateEnum
CREATE TYPE "ROLE" AS ENUM ('CUSTOMER', 'VIEWER', 'ADMIN', 'VENDOR');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "role" "ROLE" NOT NULL DEFAULT 'CUSTOMER',
    "displayName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "passwordResetToken" TEXT NOT NULL DEFAULT '',
    "isDeactivated" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastActivityAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
