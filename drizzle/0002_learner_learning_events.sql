CREATE TABLE `learner_learning_events` (
  `id` int AUTO_INCREMENT NOT NULL,
  `userId` int NOT NULL,
  `eventId` varchar(191) NOT NULL,
  `kind` varchar(32) NOT NULL,
  `occurredAt` timestamp NOT NULL,
  `payload` text NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT (now()),
  CONSTRAINT `learner_learning_events_user_event_uq` UNIQUE(`userId`, `eventId`)
);
