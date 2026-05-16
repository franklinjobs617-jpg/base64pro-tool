# Typography Reference

This project only adopts the typography guidance from the provided style reference. Color, layout, component, spacing, imagery, and interaction rules from that reference are intentionally excluded.

## Font Families

### Primary Serif

- Token: `--font-anthropic-serif`
- Preferred family: `Anthropic Serif`
- Fallback: `Lora`, then standard serif fallbacks
- Use for: display headings, secondary headings, and large editorial text that needs emphasis
- OpenType features: `"liga"`

```css
--font-anthropic-serif: "Anthropic Serif", Lora, ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
```

### Primary Sans

- Token: `--font-anthropic-sans`
- Preferred family: `Anthropic Sans`
- Fallback: `Inter`, then standard sans-serif fallbacks
- Use for: body copy, navigation, buttons, captions, form controls, labels, and general interface text

```css
--font-anthropic-sans: "Anthropic Sans", Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
```

## Type Roles

| Role | Family | Size | Weight | Line Height | Use |
| --- | --- | ---: | ---: | ---: | --- |
| Caption | Anthropic Sans | 11px | 400 | 1.33 | Small labels, metadata, helper text |
| Body | Anthropic Sans | 14-16px | 400 | 1.4 | Main readable copy |
| Interface | Anthropic Sans | 14-16px | 430-500 | 1.4 | Buttons, navigation, emphasized labels |
| Heading | Anthropic Serif | 18px | 400 | 1.33 | Small section headings |
| Heading Large | Anthropic Serif | 24-30px | 400 | 1.33 | Major section headings |
| Display | Anthropic Serif | 56px | 330 | 1.2 | Primary hero or page-level display headings |

## Font Weights

- `330`: display headings only
- `400`: default text and serif headings
- `430`: subtly emphasized body or secondary labels
- `500`: calls to action, navigation, key data points
- `600`: strong emphasis only, used sparingly

Avoid headline weights above `500`; the intended voice is lighter and editorial rather than heavy.

## CSS Token Snippet

```css
:root {
  --font-anthropic-serif: "Anthropic Serif", Lora, ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
  --font-anthropic-sans: "Anthropic Sans", Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  --text-caption: 11px;
  --leading-caption: 1.33;
  --text-heading: 18px;
  --leading-heading: 1.33;
  --text-heading-lg: 24px;
  --leading-heading-lg: 1.33;
  --text-display: 56px;
  --leading-display: 1.2;

  --font-weight-display: 330;
  --font-weight-regular: 400;
  --font-weight-emphasis: 430;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
}
```
