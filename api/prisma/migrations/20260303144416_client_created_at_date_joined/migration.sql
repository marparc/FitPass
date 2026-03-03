/*
  Warnings:

  - You are about to drop the column `createdAt` on the `client` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `client` DROP COLUMN `createdAt`,
    ADD COLUMN `dateJoined` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);
