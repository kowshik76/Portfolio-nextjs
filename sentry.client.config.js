"use client";
import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://b774c9aae03bc8cbc254e50cee579268@o4509854128603136.ingest.de.sentry.io/4509854130896976",
  integrations: [
    Sentry.feedbackIntegration({
      // Additional SDK configuration goes in here, for example:
      colorScheme: "dark",
    }),
  ],
});
