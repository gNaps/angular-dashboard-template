import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserAvatarComponent } from './user-avatar/user-avatar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { ToggleSwitchComponent } from './toggle-switch/toggle-switch.component';

@NgModule({
  declarations: [UserAvatarComponent, ToggleSwitchComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NgSelectModule],
  exports: [
    UserAvatarComponent,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    ToggleSwitchComponent,
  ],
})
export class SharedModule {}
