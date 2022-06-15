# Angular Spinner


Application example built with [Angular](https://angular.io/) 14 and adding the loading (spinner) component using the [ngx-spinner](https://www.npmjs.com/package/ngx-spinner) library.

This tutorial was posted on my [blog](https://rodrigo.kamada.com.br/blog/adicionando-o-componente-de-carregamento-spinner-em-uma-aplicacao-angular) in portuguese and on the [DEV Community](https://dev.to/rodrigokamada/adding-the-loading-component-spinner-to-an-angular-application-4mk0) in english.



[![Website](https://shields.braskam.com/v1/shields?name=website&format=rectangle&size=small&radius=5)](https://rodrigo.kamada.com.br)
[![LinkedIn](https://shields.braskam.com/v1/shields?name=linkedin&format=rectangle&size=small&radius=5)](https://www.linkedin.com/in/rodrigokamada)
[![Twitter](https://shields.braskam.com/v1/shields?name=twitter&format=rectangle&size=small&radius=5&socialAccount=rodrigokamada)](https://twitter.com/rodrigokamada)



## Prerequisites


Before you start, you need to install and configure the tools:

* [git](https://git-scm.com/)
* [Node.js and npm](https://nodejs.org/)
* [Angular CLI](https://angular.io/cli)
* IDE (e.g. [Visual Studio Code](https://code.visualstudio.com/))



## Getting started


### Create the Angular application


**1.** Let's create the application with the Angular base structure using the `@angular/cli` with the route file and the SCSS style format.

```shell
ng new angular-spinner
? Would you like to add Angular routing? Yes
? Which stylesheet format would you like to use? SCSS   [ https://sass-lang.com/documentation/syntax#scss                ]
CREATE angular-spinner/README.md (1060 bytes)
CREATE angular-spinner/.editorconfig (274 bytes)
CREATE angular-spinner/.gitignore (604 bytes)
CREATE angular-spinner/angular.json (3261 bytes)
CREATE angular-spinner/package.json (1077 bytes)
CREATE angular-spinner/tsconfig.json (783 bytes)
CREATE angular-spinner/.browserslistrc (703 bytes)
CREATE angular-spinner/karma.conf.js (1432 bytes)
CREATE angular-spinner/tsconfig.app.json (287 bytes)
CREATE angular-spinner/tsconfig.spec.json (333 bytes)
CREATE angular-spinner/src/favicon.ico (948 bytes)
CREATE angular-spinner/src/index.html (300 bytes)
CREATE angular-spinner/src/main.ts (372 bytes)
CREATE angular-spinner/src/polyfills.ts (2820 bytes)
CREATE angular-spinner/src/styles.scss (80 bytes)
CREATE angular-spinner/src/test.ts (788 bytes)
CREATE angular-spinner/src/assets/.gitkeep (0 bytes)
CREATE angular-spinner/src/environments/environment.prod.ts (51 bytes)
CREATE angular-spinner/src/environments/environment.ts (658 bytes)
CREATE angular-spinner/src/app/app-routing.module.ts (245 bytes)
CREATE angular-spinner/src/app/app.module.ts (393 bytes)
CREATE angular-spinner/src/app/app.component.scss (0 bytes)
CREATE angular-spinner/src/app/app.component.html (24617 bytes)
CREATE angular-spinner/src/app/app.component.spec.ts (1100 bytes)
CREATE angular-spinner/src/app/app.component.ts (220 bytes)
✔ Packages installed successfully.
```

**2.** Install and configure the Bootstrap CSS framework. Do steps 2 and 3 of the post *[Adding the Bootstrap CSS framework to an Angular application](https://github.com/rodrigokamada/angular-bootstrap)*.

**3.** Install the `ngx-spinner` library.

```shell
npm install ngx-spinner
```

**4.** Import the `BrowserAnimationsModule`, `FormsModule` and `NgxSpinnerModule` modules. Configure the log settings. Change the `app.module.ts` file and add the lines as below.

```typescript
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from 'ngx-spinner';

imports: [
  BrowserModule,
  BrowserAnimationsModule,
  FormsModule,
  NgxSpinnerModule,
  AppRoutingModule,
],
```

**5.** Remove the content of the `AppComponent` class from the `src/app/app.component.ts` file. Import the `NgxSpinnerService` service and create the `showSpinner` method as below.

```typescript
import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  typeSelected: string;

  constructor(private spinnerService: NgxSpinnerService) {
    this.typeSelected = 'ball-fussion';
  }

  public showSpinner(): void {
    this.spinnerService.show();

    setTimeout(() => {
      this.spinnerService.hide();
    }, 5000); // 5 seconds
  }

}
```

**6.** Remove the contents of the `src/app/app.component.html` file. Add the `ngx-spinner` component and the spinners options as below.

```html
<div class="container-fluid py-3">
  <h1>Angular Spinner</h1>

  <div class="d-grid gap-2 col-4 mt-4 mx-auto">
    <select name="type" #type="ngModel" [(ngModel)]="typeSelected" required [class.is-invalid]="type.invalid && (type.dirty || type.touched)" class="form-select form-select-sm">
      <option value="ball-8bits">Ball 8bits</option>
      <option value="ball-atom">Ball Atom</option>
      <option value="ball-beat">Ball Beat</option>
      <option value="ball-circus">Ball Circus</option>
      <option value="ball-climbing-dot">Ball Climbing Dot</option>
      <option value="ball-clip-rotate">Ball Clip Rotate</option>
      <option value="ball-clip-rotate-multiple">Ball Clip Rotate Multiple</option>
      <option value="ball-clip-rotate-pulse">Ball Clip Rotate Pulse</option>
      <option value="ball-elastic-dots">Ball Elastic Dots</option>
      <option value="ball-fall">Ball Fall</option>
      <option value="ball-fussion">Ball Fussion</option>
      <option value="ball-grid-beat">Ball Grid Beat</option>
      <option value="ball-grid-pulse">Ball Grid Pulse</option>
      <option value="ball-newton-cradle">Ball Newton Cradle</option>
      <option value="ball-pulse">Ball Pulse</option>
      <option value="ball-pulse-rise">Ball Pulse Rise</option>
      <option value="ball-pulse-sync">Ball Pulse Sync</option>
      <option value="ball-rotate">Ball Rotate</option>
      <option value="ball-running-dots">Ball Running Dots</option>
      <option value="ball-scale">Ball Scale</option>
      <option value="ball-scale-multiple">Ball Scale Multiple</option>
      <option value="ball-scale-pulse">Ball Scale Pulse</option>
      <option value="ball-scale-ripple">Ball Scale Ripple</option>
      <option value="ball-scale-ripple-multiple">Ball Scale Ripple Multiple</option>
      <option value="ball-spin">Ball Spin</option>
      <option value="ball-spin-clockwise">Ball Spin Clockwise</option>
      <option value="ball-spin-clockwise-fade">Ball Spin Clockwise Fade</option>
      <option value="ball-spin-clockwise-fade-rotating">Ball Spin Clockwise Fade Rotating</option>
      <option value="ball-spin-fade">Ball Spin Fade</option>
      <option value="ball-spin-fade-rotating">Ball Spin Fade Rotating</option>
      <option value="ball-spin-rotate">Ball Spin Rotate</option>
      <option value="ball-square-clockwise-spin">Ball Square Clockwise Spin</option>
      <option value="ball-square-spin">Ball Square Spin</option>
      <option value="ball-triangle-path">Ball Triangle Path</option>
      <option value="ball-zig-zag">Ball Zig Zag</option>
      <option value="ball-zig-zag-deflect">Ball Zig Zag Deflect</option>
      <option value="cog">Cog</option>
      <option value="cube-transition">Cube Transition</option>
      <option value="fire">Fire</option>
      <option value="line-scale">Line Scale</option>
      <option value="line-scale-party">Line Scale Party</option>
      <option value="line-scale-pulse-out">Line Scale Pulse Out</option>
      <option value="line-scale-pulse-out-rapid">Line Scale Pulse Out Rapid</option>
      <option value="line-spin-clockwise-fade">Line Spin Clockwise Fade</option>
      <option value="line-spin-clockwise-fade-rotating">Line Spin Clockwise Fade Rotating</option>
      <option value="line-spin-fade">Line Spin Fade</option>
      <option value="line-spin-fade-rotating">Line Spin Fade Rotating</option>
      <option value="pacman">Pacman</option>
      <option value="square-jelly-box">Square Jelly Box</option>
      <option value="square-loader">Square Loader</option>
      <option value="square-spin">Square Spin</option>
      <option value="timer">Timer</option>
      <option value="triangle-skew-spin">Triangle Skew Spin</option>
    </select>
    <div *ngIf="type.invalid && (type.dirty || type.touched)" class="invalid-feedback">
      <div *ngIf="type.errors?.required">This field is required.</div>
    </div>
    <button type="button" class="btn btn-sm btn-primary" (click)="showSpinner()">Show Spinner</button>
  </div>
</div>

<ngx-spinner size="medium" [type]="typeSelected"></ngx-spinner>
```

**7.** Run the application with the command below.

```shell
npm start

> angular-spinner@1.0.0 start
> ng serve

✔ Browser application bundle generation complete.

Initial Chunk Files | Names         |      Size
vendor.js           | vendor        |   2.79 MB
styles.css          | styles        | 266.58 kB
polyfills.js        | polyfills     | 128.51 kB
scripts.js          | scripts       |  76.67 kB
main.js             | main          |  11.04 kB
runtime.js          | runtime       |   6.63 kB

                    | Initial Total |   3.27 MB

Build at: 2021-09-07T01:43:42.126Z - Hash: 52e507be2073bee125a1 - Time: 5289ms

** Angular Live Development Server is listening on localhost:4200, open your browser on http://localhost:4200/ **


✔ Compiled successfully.
```

**8.** Ready! Access the URL `http://localhost:4200/` and check if the application is working. See the application working on [GitHub Pages](https://rodrigokamada.github.io/angular-spinner/) and [Stackblitz](https://stackblitz.com/edit/angular14-spinner).

![Angular Spinner](https://res.cloudinary.com/rodrigokamada/image/upload/v1638403541/Blog/angular-spinner/angular-spinner.gif)



## Cloning the application

**1.** Clone the repository.

```shell
git clone git@github.com:rodrigokamada/angular-spinner.git
```

**2.** Install the dependencies.

```shell
npm ci
```

**3.** Run the application.

```shell
npm start
```
