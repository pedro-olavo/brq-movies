export type ColorsNameTheme =
  | 'neutral-01'
  | 'primary-01'
  | 'secondary-01'
  | 'tertiary-01'
  | 'grayScale-01'
  | 'grayScale-02'
  | 'grayScale-03'
  | 'grayScale-04'
  | 'grayScale-05'
  | 'grayScale-06'
  | 'grayScale-07'
  | 'grayScale-08'
  | 'grayScale-09'
  | 'success-01'
  | 'success-02'
  | 'success-03'
  | 'warning-01'
  | 'warning-02'
  | 'warning-03'
  | 'error-01'
  | 'error-02'
  | 'error-03'
  | 'info-01'
  | 'info-02'
  | 'info-03';

export type FontsNameTheme =
  | 'display-01'
  | 'display-02'
  | 'display-03'
  | 'title-01'
  | 'title-02'
  | 'title-03'
  | 'title-04'
  | 'title-05'
  | 'title-06'
  | 'title-07'
  | 'body-01'
  | 'body-02'
  | 'caption-01'
  | 'caption-02'
  | 'caption-03';

export type IconsNameTheme =
  | 'iconDisplay-01'
  | 'iconDisplay-02'
  | 'iconTitle-01'
  | 'iconTitle-02'
  | 'iconBody-01'
  | 'iconBody-02'
  | 'iconCaption-01'
  | 'iconCaption-02'
  | 'iconCaption-03';

export type SpaceNameTheme =
  | 'spacing-00'
  | 'spacing-02'
  | 'spacing-04'
  | 'spacing-08'
  | 'spacing-12'
  | 'spacing-16'
  | 'spacing-20'
  | 'spacing-24'
  | 'spacing-28'
  | 'spacing-32'
  | 'spacing-36'
  | 'spacing-40'
  | 'spacing-48'
  | 'spacing-64';

export type RadiiNameTheme =
  | 'corner-00'
  | 'corner-04'
  | 'corner-08'
  | 'corner-12'
  | 'corner-16'
  | 'corner-24'
  | 'corner-48';

export type BorderWidthsNameTheme =
  | 'stroke-00'
  | 'stroke-01'
  | 'stroke-02'
  | 'stroke-03';

export type FontFamilyNamesTheme =
  | 'extraLight'
  | 'light'
  | 'regular'
  | 'semiBold'
  | 'bold';

export type IconSizeTheme = Record<IconsNameTheme, string>;
export type ColorTheme = Record<ColorsNameTheme, string>;
export type FontSizeTheme = Record<FontsNameTheme, string>;
export type FontFamilyTheme = Record<FontFamilyNamesTheme, string>;
export type LineHeightsTheme = Record<FontsNameTheme, string>;
export type SpaceTheme = Record<SpaceNameTheme, string>;
export type RadiiTheme = Record<RadiiNameTheme, string>;
export type BorderWidthsTheme = Record<BorderWidthsNameTheme, string>;

export interface Theme {
  colors: ColorTheme;
  fontSizes: FontSizeTheme;
  fontFamily: FontFamilyTheme;
  iconSizes: IconSizeTheme;
  lineHeights: LineHeightsTheme;
  space: SpaceTheme;
  radii: RadiiTheme;
  borderWidths: BorderWidthsTheme;
}
