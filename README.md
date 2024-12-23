
# ng-wizard-step
ng-wizard-step is a fork of the original [ng-wizard](https://github.com/abdulkadirgenc/ng-wizard), adapted to be compatible with Angular 17. 
This version preserves the original functionality while providing updated dependencies and support for modern Angular versions.

## Screenshots

![Default](/Screenshots/1_default.png)

![Arrows](/Screenshots/2_arrows.png)

![Circles](/Screenshots/3_circles.png)

![Dots](/Screenshots/4_dots.png)

## Dependencies
+ [Bootstrap 5](https://getbootstrap.com/docs/5.3/getting-started/download/)

## Getting Started
Install **ng-wizard-step** through npm:
```bash
npm install --save ng-wizard-step
```

Include **bootstrap** CSS file (skip if already imported):
```css
@import '~bootstrap/dist/css/bootstrap.min.css';
```

Include **ng-wizard-step** CSS files:
```css
/* Mandatory */
@import '~ng-wizard-step/themes/ng_wizard.min.css';

/* Optional */
/* If a theme other than default is used, the css file for that theme is required. */
@import '~ng-wizard-step/themes/ng_wizard_theme_arrows.min.css';
@import '~ng-wizard-step/themes/ng_wizard_theme_circles.min.css';
@import '~ng-wizard-step/themes/ng_wizard_theme_dots.min.css';
```

Import the **ng-wizard-step module** into your app module:
```typescript
import { NgModule } from '@angular/core';
import { NgWizardModule, NgWizardConfig, THEME } from 'ng-wizard-step';

const ngWizardConfig: NgWizardConfig = {
  theme: THEME.default
};

@NgModule({
  imports: [
    NgWizardModule.forRoot(ngWizardConfig)
  ]
})
export class AppModule { }
```

Add an **ng-wizard-step** component to the HTML template of your component:
```html
<ng-wizard [config]="config" (stepChanged)="stepChanged($event)">
  <ng-wizard-step [title]="'Step 1'" [description]="'Step 1 description'" [canEnter]="isValidTypeBoolean" [canExit]="isValidFunctionReturnsBoolean.bind(this)">
    <span>Step 1 content</span>
  </ng-wizard-step>

  <ng-wizard-step [title]="'Step 2'" [description]="'Step 2 description'" [state]="stepStates.disabled">
    <span>Step 2 content</span>
  </ng-wizard-step>

  <ng-wizard-step [title]="'Step 3'" [description]="'Step 3 description'" [canEnter]="isValidFunctionReturnsObservable.bind(this)" [canExit]="isValidFunctionReturnsBoolean.bind(this)">
    <span>Step 3 content</span>
  </ng-wizard-step>

  <ng-wizard-step [title]="'Step 4'" [description]="'Step 4 description'">
    <span>Step 4 content</span>
  </ng-wizard-step>
</ng-wizard>
```

## Configuration
Refer to the original documentation for detailed configuration options: [ng-wizard Documentation](https://github.com/abdulkadirgenc/ng-wizard).

## License
This project is licensed under the [MIT License](./LICENSE). Credits go to [abdulkadirgenc](https://github.com/abdulkadirgenc) for the original implementation.