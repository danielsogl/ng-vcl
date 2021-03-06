import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    loadChildren: './demos/checkbox/demo.module#CheckboxDemoModule',
    path: 'checkbox',
    data: {
      demo: {
        label: 'Checkbox',
        category: 'Form Controls',
      }
    }
  },
  {
    loadChildren: './demos/date-picker/demo.module#DatePickerDemoModule',
    path: 'date-picker',
    data: {
      demo: {
        label: 'Date Picker',
        category: 'Form Controls',
      }
    }
  },
  {
    loadChildren: './demos/dropdown/demo.module#DropdownDemoModule',
    path: 'dropdown',
    data: {
      demo: {
        label: 'Dropdown',
        category: 'Form Controls',
      }
    }
  },
  {
    loadChildren: './demos/file-input/demo.module#FileInputDemoModule',
    path: 'file-input',
    data: {
      demo: {
        label: 'File Input',
        category: 'Form Controls',
      }
    }
  },
  {
    loadChildren: './demos/flip-switch/demo.module#FlipSwitchDemoModule',
    path: 'flip-switch',
    data: {
      demo: {
        label: 'Flip-Switch',
        category: 'Form Controls',
      }
    }
  },
  {
    loadChildren: './demos/input/demo.module#InputDemoModule',
    path: 'input',
    data: {
      demo: {
        label: 'Input',
        category: 'Form Controls',
      }
    }
  },
  {
    loadChildren: './demos/password-input/demo.module#PasswordInputDemoModule',
    path: 'password-input',
    data: {
      demo: {
        label: 'Password Input',
        category: 'Form Controls',
      }
    }
  },
  {
    loadChildren: './demos/input-control-group/demo.module#InputControlGroupDemoModule',
    path: 'input-control-group',
    data: {
      demo: {
        label: 'Input Control Group',
        category: 'Form Controls',
      }
    }
  },
  {
    loadChildren: './demos/month-picker/demo.module#MonthPickerDemoModule',
    path: 'month-picker',
    data: {
      demo: {
        label: 'Month Picker',
        category: 'Form Controls',
      }
    }
  },
  {
    loadChildren: './demos/radio-button/demo.module#RadioButtonDemoModule',
    path: 'radio-button',
    data: {
      demo: {
        label: 'Radio Button',
        category: 'Form Controls',
      }
    }
  },
  {
    loadChildren: './demos/select/demo.module#SelectDemoModule',
    path: 'select',
    data: {
      demo: {
        label: 'Select',
        category: 'Form Controls',
      }
    }
  },
  {
    loadChildren: './demos/textarea/demo.module#TextareaDemoModule',
    path: 'textarea',
    data: {
      demo: {
        label: 'Textarea',
        category: 'Form Controls',
      }
    }
  },
  {
    loadChildren: './demos/token/demo.module#TokenDemoModule',
    path: 'token',
    data: {
      demo: {
        label: 'Token',
        category: 'Form Controls',
      }
    }
  },
  {
    loadChildren: './demos/button/demo.module#ButtonDemoModule',
    path: 'button',
    data: {
      demo: {
        label: 'Button',
        category: 'Buttons',
      }
    }
  },
  {
    loadChildren: './demos/button-group/demo.module#ButtonGroupDemoModule',
    path: 'button-group',
    data: {
      demo: {
        label: 'Button Group',
        category: 'Buttons',
      }
    }
  },
  {
    loadChildren: './demos/label/demo.module#LabelDemoModule',
    path: 'label',
    data: {
      demo: {
        label: 'Label',
        category: 'Buttons',
      }
    }
  },
  {
    loadChildren: './demos/icon/demo.module#IconDemoModule',
    path: 'icon',
    data: {
      demo: {
        label: 'Icon',
        category: 'Images',
      }
    }
  },
  {
    loadChildren: './demos/icogram/demo.module#IcogramDemoModule',
    path: 'icogram',
    data: {
      demo: {
        label: 'Icogram',
        category: 'Images',
      }
    }
  },
  {
    loadChildren: './demos/alert/demo.module#AlertDemoModule',
    path: 'alert',
    data: {
      demo: {
        label: 'Alert',
        category: 'Overlays',
      }
    }
  },
  {
    loadChildren: './demos/layer/demo.module#LayerDemoModule',
    path: 'layer',
    data: {
      demo: {
        label: 'Layer',
        category: 'Overlays',
      }
    }
  },
  {
    loadChildren: './demos/notification/demo.module#NotificationDemoModule',
    path: 'notifications',
    data: {
      demo: {
        label: 'Notifications',
        category: 'Overlays',
      }
    }
  },
  {
    loadChildren: './demos/popover/demo.module#PopoverDemoModule',
    path: 'popover',
    data: {
      demo: {
        label: 'Popover',
        category: 'Overlays',
      }
    }
  },
  {
    loadChildren: './demos/tooltip/demo.module#ToolTipDemoModule',
    path: 'tooltip',
    data: {
      demo: {
        label: 'Tooltip',
        category: 'Overlays',
      }
    }
  },
  {
    loadChildren: './demos/busy-indicator/demo.module#BusyDemoModule',
    path: 'busy',
    data: {
      demo: {
        label: 'Busy',
        category: 'Status Information',
      }
    }
  },
  {
    loadChildren: './demos/table/demo.module#TableDemoModule',
    path: 'table',
    data: {
      demo: {
        label: 'Table',
        category: 'Tabular Data',
      }
    }
  },
  {
    loadChildren: './demos/form/demo.module#FormDemoModule',
    path: 'form',
    data: {
      demo: {
        label: 'Form',
        category: 'Forms',
      }
    }
  },
  {
    loadChildren: './demos/form-control-label/demo.module#FormControlLabelDemoModule',
    path: 'form-control-label',
    data: {
      demo: {
        label: 'Form Control Label',
        category: 'Forms',
      }
    }
  },
  {
    loadChildren: './demos/link/demo.module#LinkDemoModule',
    path: 'link',
    data: {
      demo: {
        label: 'Link',
        category: 'Links',
      }
    }
  },
  {
    loadChildren: './demos/navigation/demo.module#NavigationDemoModule',
    path: 'navigation',
    data: {
      demo: {
        label: 'Navigation',
        category: 'Navigation',
      }
    }
  },
  {
    loadChildren: './demos/progress-bar/demo.module#ProgressBarDemoModule',
    path: 'progress-bar',
    data: {
      demo: {
        label: 'Progress-Bar',
        category: 'Status Information',
      }
    }
  },
  {
    loadChildren: './demos/tab-nav/demo.module#TabNavDemoModule',
    path: 'tab-nav',
    data: {
      demo: {
        label: 'Tab Navigation',
        category: 'Navigation',
      }
    }
  },
  {
    loadChildren: './demos/toolbar/demo.module#ToolbarDemoModule',
    path: 'toolbar',
    data: {
      demo: {
        label: 'Toolbar',
        category: 'Navigation',
      }
    }
  },
  {
    loadChildren: './demos/wormhole/demo.module#WormholeDemoModule',
    path: 'wormhole',
    data: {
      demo: {
        label: 'Wormhole',
        category: 'Other',
      }
    }
  },
  {
    loadChildren: './demos/l10n/demo.module#L10nDemoModule',
    path: 'l10n',
    data: {
      demo: {
        label: 'L10n',
        category: 'Other',
      }
    }
  },
  {
    loadChildren: './demos/metalist/demo.module#MetalistDemoModule',
    path: 'metalist',
    data: {
      demo: {
        label: 'Metalist',
        category: 'Other',
      }
    }
  },
  {
    loadChildren: './demos/off-click/demo.module#OffClickDemoModule',
    path: 'off-click',
    data: {
      demo: {
        label: 'Off Click',
        category: 'Other',
      }
    }
  },
  {
    loadChildren: './demos/json-editor/demo.module#JsonEditorDemoModule',
    path: 'json-editor',
    data: {
      demo: {
        label: 'JSON Editor',
        category: 'External',
      }
    }
  },
  {
    loadChildren: './demos/plotly/demo.module#PlotlyDemoModule',
    path: 'plotly',
    data: {
      demo: {
        label: 'Plotly',
        category: 'External',
      }
    }
  },
  {
    loadChildren: './demos/store/demo.module#StoreDemoModule',
    path: 'store',
    data: {
      demo: {
        label: 'Store',
        category: 'External',
      }
    }
  },
  {
    loadChildren: './demos/jss-form/demo.module#VCLJssFormDemoModule',
    path: 'jss-form',
    data: {
      demo: {
        label: 'JSS-Form',
        category: 'External',
      }
    }
  }
];


export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(routes, {
  useHash: true
});




