# vcl-label

## Usage:

```javascript
import { VCLLabelModule } from 'ng-vcl';

@NgModule({
  imports: [ VCLLabelModule ],
  ...
})
export class AppComponent {}
```

## Normal:

```html
<vcl-label label="mylabel" subLabel="with sub"></vcl-label>
```

## Wrapping:

```html
<vcl-label label="Watch my button" subLabel="my button is amazing">
  <button>button</button>
</vcl-label>
```

## typed

```html
<vcl-label label="mylabel" subLabel="with sub" type="primary"></vcl-label>

<vcl-label label="mylabel" subLabel="with sub" type="sucess"></vcl-label>

<vcl-label label="mylabel" subLabel="with sub" type="info"></vcl-label>
```

### API

#### vcl-navigation Properties:

Name       | Type   | Default | Description
---------- | ------ | ------- | ----------------------------------------------------------
`label`    | string |         | the main-text
`subLabel` | string |         | the sub-test
`type`     | string |         | colored types; ENUM(primary, sucess, info, warning, error)