-- CreateTable
CREATE TABLE `Usuario` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `cargo` VARCHAR(191) NOT NULL,
    `senha` VARCHAR(191) NOT NULL,
    `role` ENUM('USER', 'ADMIN') NOT NULL DEFAULT 'USER',
    `criadoPor` VARCHAR(191) NULL,
    `criadoEm` DATETIME(3) NULL,
    `atualizadoPor` VARCHAR(191) NULL,
    `atulizadoEm` DATETIME(3) NULL,
    `deletado` BOOLEAN NULL DEFAULT false,
    `deletadoPor` VARCHAR(191) NULL,
    `deletadoEm` DATETIME(3) NULL,

    UNIQUE INDEX `Usuario_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `refresh_token` (
    `id` VARCHAR(191) NOT NULL,
    `expiresIn` INTEGER NOT NULL,
    `usuarioId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `refresh_token_usuarioId_key`(`usuarioId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Device` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NULL,
    `uniqueID` VARCHAR(191) NOT NULL,
    `latitude` VARCHAR(191) NOT NULL,
    `longitude` VARCHAR(191) NOT NULL,
    `leitura_sensores` BOOLEAN NULL,
    `nivel_agua` BOOLEAN NULL,
    `criadoPor` VARCHAR(191) NULL,
    `criadoEm` DATETIME(3) NULL,
    `atualizadoPor` VARCHAR(191) NULL,
    `atulizadoEm` DATETIME(3) NULL,
    `deletado` BOOLEAN NULL DEFAULT false,
    `deletadoPor` VARCHAR(191) NULL,
    `deletadoEm` DATETIME(3) NULL,
    `endereco_Id` VARCHAR(191) NULL,

    UNIQUE INDEX `Device_uniqueID_key`(`uniqueID`),
    UNIQUE INDEX `Device_endereco_Id_key`(`endereco_Id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Endereco` (
    `id` VARCHAR(191) NOT NULL,
    `localizacao` VARCHAR(191) NULL,
    `endereco` VARCHAR(191) NULL,
    `bairro` VARCHAR(191) NULL,
    `cidade` VARCHAR(191) NULL,
    `uf` VARCHAR(191) NULL,
    `criadoPor` VARCHAR(191) NULL,
    `criadoEm` DATETIME(3) NULL,
    `atualizadoPor` VARCHAR(191) NULL,
    `atualizadoEm` DATETIME(3) NULL,
    `deletado` BOOLEAN NULL DEFAULT false,
    `deletadoPor` VARCHAR(191) NULL,
    `deletadoEm` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Leitura` (
    `id` VARCHAR(191) NOT NULL,
    `device_id` VARCHAR(191) NOT NULL,
    `anemometro` DOUBLE NULL,
    `direcao_vento` DOUBLE NULL,
    `pluviometro` DOUBLE NULL,
    `temperatura` DOUBLE NULL,
    `umidade` DOUBLE NULL,
    `nivel_agua` INTEGER NULL,
    `pressao` DOUBLE NULL,
    `data_leitura` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `refresh_token` ADD CONSTRAINT `refresh_token_usuarioId_fkey` FOREIGN KEY (`usuarioId`) REFERENCES `Usuario`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Device` ADD CONSTRAINT `Device_endereco_Id_fkey` FOREIGN KEY (`endereco_Id`) REFERENCES `Endereco`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Leitura` ADD CONSTRAINT `Leitura_device_id_fkey` FOREIGN KEY (`device_id`) REFERENCES `Device`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
