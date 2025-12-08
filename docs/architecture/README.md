# DHubBW Architecture Diagrams

This folder contains PlantUML source files to document the high-level component architecture of the DHubBW Web/PWA.

## Files

- `component-diagram.puml` — Component diagram of the app shell, feature views, core services, persistence, integrations, and external sources.
- `component-diagram-production.puml` — Proposed production architecture (React Native app + Spring Boot microservices, gateway, persistence, external systems).

## Render locally

Option A — VS Code extension:

- Install "PlantUML" extension (jebbs.plantuml)
- Open `component-diagram.puml` and use the preview (Alt+D)

Option B — Docker (no local Java required):

```bash
# PNG
docker run --rm -v "$PWD":/data plantuml/plantuml -tpng docs/architecture/component-diagram.puml
# SVG
docker run --rm -v "$PWD":/data plantuml/plantuml -tsvg docs/architecture/component-diagram.puml
```

Option C — PlantUML jar (requires Java):

```bash
# Download jar https://github.com/plantuml/plantuml/releases
java -jar plantuml.jar -tpng docs/architecture/component-diagram.puml
java -jar plantuml.jar -tsvg docs/architecture/component-diagram.puml
```

## Conventions

- Keep components stable; annotate future integrations with comments
- Match names to folders or responsibilities in the repo
- Prefer simple arrows and group by layer (UI, Core, Domain, Persistence, Integrations)

## Production Architecture Notes

The production diagram introduces:

- React Native mobile app with modular feature boundaries and centralized state/query layer (Redux Toolkit Query or React Query variant).
- API Gateway for routing, rate limiting, edge auth enforcement, optional GraphQL composition.
- Spring Boot microservices split into Core Services (user, groups, notifications, auth adapter) and Domain Services (calendar, mensa, polls, files, qna, flashcards, admin).
- Integration Adapters isolate external APIs (Rapla ICS, Studierendenwerk, storage, messaging, search).
- Shared infrastructure for persistence (PostgreSQL), caching (Redis), object storage, search (OpenSearch), messaging (Kafka), telemetry (OpenTelemetry collector), push providers.
- Clean architecture layering inside each microservice (controller → application → domain → adapter).
- Event-driven flows (Kafka) for updates (e.g., new Mensa menu, poll results) and notification fanout.

You can render the production diagram the same way:

```bash
docker run --rm -v "$PWD":/data plantuml/plantuml -tpng docs/architecture/component-diagram-production.puml
```
