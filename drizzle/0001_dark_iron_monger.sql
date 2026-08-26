CREATE TABLE `learner_progress` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int NOT NULL,
	`state` text NOT NULL,
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `learner_progress_id` PRIMARY KEY(`id`),
	CONSTRAINT `learner_progress_userId_unique` UNIQUE(`userId`)
);
