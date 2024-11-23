import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatCard, MatCardContent, MatCardImage} from '@angular/material/card';
import {ReactiveFormsModule} from '@angular/forms';
import { FlexLayoutModule } from '@ngbracket/ngx-layout';
import {MatFormField, MatInput, MatLabel, MatPrefix} from '@angular/material/input';
import {MatIcon} from '@angular/material/icon';
import {MatCheckbox} from '@angular/material/checkbox';
import {MatButton} from '@angular/material/button';
import {MatDivider} from '@angular/material/divider';
import {HomeComponent} from './home/home.component';
import {IedManagementComponent} from './ide-management/ied-management.component';
import {MatNestedTreeNode, MatTree, MatTreeNode, MatTreeNodeDef} from '@angular/material/tree';
import {MatTab, MatTabGroup} from '@angular/material/tabs';

@NgModule({
  declarations: [
    AppComponent,
    LoginScreenComponent,
    HomeComponent,
    IedManagementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCard,
    MatCardContent,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatInput,
    MatFormField,
    MatLabel,
    MatCardImage,
    MatPrefix,
    MatIcon,
    MatCheckbox,
    MatButton,
    MatDivider,
    MatNestedTreeNode,
    MatTree,
    MatTreeNodeDef,
    MatTabGroup,
    MatTab,
    MatTreeNode
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
