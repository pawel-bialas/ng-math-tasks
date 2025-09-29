# AGENTS.md - Angular Math Tasks Project

## Build/Test/Lint Commands
- **Start dev server**: `npm start` or `ng serve`
- **Build**: `npm run build` or `ng build`
- **Test**: `npm test` or `ng test`
- **Test single file**: `ng test --include='**/basic-task.component.spec.ts'`
- **Watch mode**: `npm run watch` or `ng build --watch --configuration development`

## Code Style Guidelines
- **TypeScript**: Strict mode enabled, single quotes for strings
- **Indentation**: 2 spaces (no tabs)
- **Component naming**: PascalCase with `Component` suffix (e.g., `TaskSetupComponent`)
- **File naming**: kebab-case with component type suffix (e.g., `task-setup.component.ts`)
- **Imports**: Group by source - Angular imports first, then third-party, then local imports
- **Component structure**: Use `@Component` decorator with separate template/style files
- **SCSS**: Use for styling (configured in angular.json)
- **Testing**: Jasmine/Karma framework, test files named `*.component.spec.ts`
- **Enums**: PascalCase naming (e.g., `TaskMathOperator`, `TaskQMarkPosition`)
- **Services**: Use dependency injection, named with `Service` suffix

## Project Structure
- Angular 12+ with Material Design
- Strict TypeScript configuration
- Component prefix: `app`
- Source root: `src/`
- Material theme: indigo-pink