import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { NgtColorPipeModule, NgtCoreModule } from '@angular-three/core';
import { NgtAmbientLightModule, NgtPointLightModule } from '@angular-three/core/lights';
import { NgtPrimitiveModule } from '@angular-three/core/primitive';
import { NgtSobaLoaderModule } from '@angular-three/soba/loaders';
import { NgtSobaOrbitControlsModule } from '@angular-three/soba/controls';
import { HomeComponent } from './home/home.component';
import { MugComponent } from './mug/mug.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MugComponent
  ],
  imports: [
    BrowserModule,
    NgtCoreModule,
    NgtSobaLoaderModule,
    NgtPrimitiveModule,
    NgtSobaOrbitControlsModule,
    NgtAmbientLightModule,
    NgtPointLightModule,
    NgtColorPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
