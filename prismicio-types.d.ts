// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type BackgroundOfSmallImagesDocumentDataSlicesSlice = SmallBackgroundImageSlice;

/**
 * Content for Background Of Small Images documents
 */
interface BackgroundOfSmallImagesDocumentData {
  /**
   * Slice Zone field in *Background Of Small Images*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: background_of_small_images.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<BackgroundOfSmallImagesDocumentDataSlicesSlice>;
}

/**
 * Background Of Small Images document from Prismic
 *
 * - **API ID**: `background_of_small_images`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type BackgroundOfSmallImagesDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<BackgroundOfSmallImagesDocumentData>,
    "background_of_small_images",
    Lang
  >;

/**
 * Content for Footer documents
 */
interface FooterDocumentData {
  /**
   * Background Image field in *Footer*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.background_image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  background_image: prismic.ImageField<never>;
}

/**
 * Footer document from Prismic
 *
 * - **API ID**: `footer`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type FooterDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<FooterDocumentData>,
    "footer",
    Lang
  >;

/**
 * Content for Header documents
 */
interface HeaderDocumentData {
  /**
   * Background Color field in *Header*
   *
   * - **Field Type**: Color
   * - **Placeholder**: *None*
   * - **API ID Path**: header.background_color
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#color
   */
  background_color: prismic.ColorField;

  /**
   * Logo field in *Header*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: header.logo
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  logo: prismic.ImageField<never>;

  /**
   * CTA Icon field in *Header*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: header.cta_icon
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  cta_icon: prismic.ImageField<never>;

  /**
   * CTA Message field in *Header*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: header.cta_message
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  cta_message: prismic.KeyTextField;

  /**
   * CTA Phone field in *Header*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: header.cta_phone
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  cta_phone: prismic.KeyTextField;

  /**
   * CTA Link field in *Header*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: header.cta_link
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  cta_link: prismic.LinkField;

  /**
   * CTA Text Color field in *Header*
   *
   * - **Field Type**: Color
   * - **Placeholder**: *None*
   * - **API ID Path**: header.cta_text_color
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#color
   */
  cta_text_color: prismic.ColorField;
}

/**
 * Header document from Prismic
 *
 * - **API ID**: `header`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HeaderDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<HeaderDocumentData>,
    "header",
    Lang
  >;

type HomepageDocumentDataSlicesSlice =
  | ReviewsSlice
  | Section3Slice
  | Section2Slice
  | Section1Slice
  | HeroSlice;

/**
 * Content for Homepage documents
 */
interface HomepageDocumentData {
  /**
   * Title field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Slice Zone field in *Homepage*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomepageDocumentDataSlicesSlice> /**
   * Meta Title field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: homepage.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: homepage.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Homepage*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Homepage document from Prismic
 *
 * - **API ID**: `homepage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomepageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<HomepageDocumentData>,
    "homepage",
    Lang
  >;

type LandingPageDocumentDataSlicesSlice =
  | Section2Slice
  | Section3Slice
  | Section1Slice
  | ReviewsSlice
  | HeroSlice;

/**
 * Content for Landing Page documents
 */
interface LandingPageDocumentData {
  /**
   * Slice Zone field in *Landing Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: landing_page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<LandingPageDocumentDataSlicesSlice> /**
   * Meta Title field in *Landing Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: landing_page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Landing Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: landing_page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Landing Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: landing_page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Landing Page document from Prismic
 *
 * - **API ID**: `landing_page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type LandingPageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<LandingPageDocumentData>,
    "landing_page",
    Lang
  >;

/**
 * Content for Settings documents
 */
interface SettingsDocumentData {
  /**
   * Primary Color field in *Settings*
   *
   * - **Field Type**: Color
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.primary_color
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#color
   */
  primary_color: prismic.ColorField;

  /**
   * Secondary Color field in *Settings*
   *
   * - **Field Type**: Color
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.secondary_color
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#color
   */
  secondary_color: prismic.ColorField;

  /**
   * CTA Text Color field in *Settings*
   *
   * - **Field Type**: Color
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.cta_text_color
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#color
   */
  cta_text_color: prismic.ColorField;

  /**
   * CTA Background Color field in *Settings*
   *
   * - **Field Type**: Color
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.cta_background_color
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#color
   */
  cta_background_color: prismic.ColorField;

  /**
   * Favicon field in *Settings*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.favicon
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  favicon: prismic.ImageField<never>;

  /**
   * Meta Title field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.meta_title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.meta_description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * OG Image field in *Settings*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.og_image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  og_image: prismic.ImageField<never>;
}

/**
 * Settings document from Prismic
 *
 * - **API ID**: `settings`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SettingsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<SettingsDocumentData>,
    "settings",
    Lang
  >;

export type AllDocumentTypes =
  | BackgroundOfSmallImagesDocument
  | FooterDocument
  | HeaderDocument
  | HomepageDocument
  | LandingPageDocument
  | SettingsDocument;

/**
 * Primary content in *Hero → Primary*
 */
export interface HeroSliceDefaultPrimary {
  /**
   * Bond field in *Hero → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.bond
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  bond: prismic.RichTextField;

  /**
   * Bond Color field in *Hero → Primary*
   *
   * - **Field Type**: Color
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.bond_color
   * - **Documentation**: https://prismic.io/docs/field#color
   */
  bond_color: prismic.ColorField;

  /**
   * Header field in *Hero → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.header
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  header: prismic.RichTextField;

  /**
   * Header Color field in *Hero → Primary*
   *
   * - **Field Type**: Color
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.header_color
   * - **Documentation**: https://prismic.io/docs/field#color
   */
  header_color: prismic.ColorField;

  /**
   * Sub Header field in *Hero → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.sub_header
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  sub_header: prismic.RichTextField;

  /**
   * Sub Header Color field in *Hero → Primary*
   *
   * - **Field Type**: Color
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.sub_header_color
   * - **Documentation**: https://prismic.io/docs/field#color
   */
  sub_header_color: prismic.ColorField;

  /**
   * Image field in *Hero → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Popup Video field in *Hero → Primary*
   *
   * - **Field Type**: Embed
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.popup_video
   * - **Documentation**: https://prismic.io/docs/field#embed
   */
  popup_video: prismic.EmbedField;

  /**
   * CTA Text field in *Hero → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.cta_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  cta_text: prismic.KeyTextField;

  /**
   * CTA Link field in *Hero → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.cta_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  cta_link: prismic.LinkField;

  /**
   * After CTA Text field in *Hero → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.after_cta_text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  after_cta_text: prismic.RichTextField;

  /**
   * Background Image field in *Hero → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.background_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  background_image: prismic.ImageField<never>;

  /**
   * Transition Image field in *Hero → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.transition_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  transition_image: prismic.ImageField<never>;

  /**
   * Background Of Small Images field in *Hero → Primary*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.background_of_small_images
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  background_of_small_images: prismic.ContentRelationshipField<"background_of_small_images">;
}

/**
 * Primary content in *Hero → Items*
 */
export interface HeroSliceDefaultItem {
  /**
   * Key Point Image field in *Hero → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.items[].key_point_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  key_point_image: prismic.ImageField<never>;
}

/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroSliceDefaultPrimary>,
  Simplify<HeroSliceDefaultItem>
>;

/**
 * Slice variation for *Hero*
 */
type HeroSliceVariation = HeroSliceDefault;

/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSlice = prismic.SharedSlice<"hero", HeroSliceVariation>;

/**
 * Primary content in *Reviews → Primary*
 */
export interface ReviewsSliceDefaultPrimary {
  /**
   * Title field in *Reviews → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: reviews.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * Title Color field in *Reviews → Primary*
   *
   * - **Field Type**: Color
   * - **Placeholder**: *None*
   * - **API ID Path**: reviews.primary.title_color
   * - **Documentation**: https://prismic.io/docs/field#color
   */
  title_color: prismic.ColorField;

  /**
   * Image field in *Reviews → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: reviews.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Background Image field in *Reviews → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: reviews.primary.background_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  background_image: prismic.ImageField<never>;

  /**
   * Testimonial Color field in *Reviews → Primary*
   *
   * - **Field Type**: Color
   * - **Placeholder**: *None*
   * - **API ID Path**: reviews.primary.testimonial_color
   * - **Documentation**: https://prismic.io/docs/field#color
   */
  testimonial_color: prismic.ColorField;

  /**
   * Background Of Small Images field in *Reviews → Primary*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: reviews.primary.background_of_small_images
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  background_of_small_images: prismic.ContentRelationshipField<"background_of_small_images">;
}

/**
 * Primary content in *Reviews → Items*
 */
export interface ReviewsSliceDefaultItem {
  /**
   * Testimonial field in *Reviews → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: reviews.items[].testimonial
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  testimonial: prismic.RichTextField;

  /**
   * Name field in *Reviews → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: reviews.items[].name
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  name: prismic.RichTextField;
}

/**
 * Default variation for Reviews Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ReviewsSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ReviewsSliceDefaultPrimary>,
  Simplify<ReviewsSliceDefaultItem>
>;

/**
 * Slice variation for *Reviews*
 */
type ReviewsSliceVariation = ReviewsSliceDefault;

/**
 * Reviews Shared Slice
 *
 * - **API ID**: `reviews`
 * - **Description**: Reviews
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ReviewsSlice = prismic.SharedSlice<
  "reviews",
  ReviewsSliceVariation
>;

/**
 * Primary content in *Section1 → Primary*
 */
export interface Section1SliceDefaultPrimary {
  /**
   * Title field in *Section1 → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: section1.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * Title Color field in *Section1 → Primary*
   *
   * - **Field Type**: Color
   * - **Placeholder**: *None*
   * - **API ID Path**: section1.primary.title_color
   * - **Documentation**: https://prismic.io/docs/field#color
   */
  title_color: prismic.ColorField;

  /**
   * Image field in *Section1 → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: section1.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Text field in *Section1 → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: section1.primary.text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text: prismic.RichTextField;

  /**
   * Text Color field in *Section1 → Primary*
   *
   * - **Field Type**: Color
   * - **Placeholder**: *None*
   * - **API ID Path**: section1.primary.text_color
   * - **Documentation**: https://prismic.io/docs/field#color
   */
  text_color: prismic.ColorField;

  /**
   * CTA Text field in *Section1 → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: section1.primary.cta_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  cta_text: prismic.KeyTextField;

  /**
   * CTA Link field in *Section1 → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: section1.primary.cta_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  cta_link: prismic.LinkField;

  /**
   * After CTA Text field in *Section1 → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: section1.primary.after_cta_text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  after_cta_text: prismic.RichTextField;

  /**
   * Background Image field in *Section1 → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: section1.primary.background_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  background_image: prismic.ImageField<never>;

  /**
   * Transition In Image field in *Section1 → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: section1.primary.transition_image_1
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  transition_image_1: prismic.ImageField<never>;

  /**
   * Transition Out Image field in *Section1 → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: section1.primary.transition_out_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  transition_out_image: prismic.ImageField<never>;

  /**
   * Background Of Small Images field in *Section1 → Primary*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: section1.primary.background_of_small_images
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  background_of_small_images: prismic.ContentRelationshipField<"background_of_small_images">;
}

/**
 * Default variation for Section1 Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type Section1SliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<Section1SliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Section1*
 */
type Section1SliceVariation = Section1SliceDefault;

/**
 * Section1 Shared Slice
 *
 * - **API ID**: `section1`
 * - **Description**: Section1
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type Section1Slice = prismic.SharedSlice<
  "section1",
  Section1SliceVariation
>;

/**
 * Primary content in *Section2 → Primary*
 */
export interface Section2SliceDefaultPrimary {
  /**
   * Title field in *Section2 → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: section2.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * Title Color field in *Section2 → Primary*
   *
   * - **Field Type**: Color
   * - **Placeholder**: *None*
   * - **API ID Path**: section2.primary.title_color
   * - **Documentation**: https://prismic.io/docs/field#color
   */
  title_color: prismic.ColorField;

  /**
   * CTA Text field in *Section2 → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: section2.primary.cta_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  cta_text: prismic.KeyTextField;

  /**
   * CTA Link field in *Section2 → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: section2.primary.cta_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  cta_link: prismic.LinkField;

  /**
   * After CTA Text field in *Section2 → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: section2.primary.after_cta_text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  after_cta_text: prismic.RichTextField;

  /**
   * Background Image field in *Section2 → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: section2.primary.background_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  background_image: prismic.ImageField<never>;

  /**
   * Transition In Image field in *Section2 → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: section2.primary.transition_in_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  transition_in_image: prismic.ImageField<never>;

  /**
   * Transition Out Image field in *Section2 → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: section2.primary.transition_out_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  transition_out_image: prismic.ImageField<never>;

  /**
   * Key Point Icon field in *Section2 → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: section2.primary.key_point_icon
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  key_point_icon: prismic.ImageField<never>;

  /**
   * Key Points Text Color field in *Section2 → Primary*
   *
   * - **Field Type**: Color
   * - **Placeholder**: *None*
   * - **API ID Path**: section2.primary.text_color
   * - **Documentation**: https://prismic.io/docs/field#color
   */
  text_color: prismic.ColorField;

  /**
   * Background Of Small Images field in *Section2 → Primary*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: section2.primary.background_of_small_images
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  background_of_small_images: prismic.ContentRelationshipField<"background_of_small_images">;
}

/**
 * Primary content in *Section2 → Items*
 */
export interface Section2SliceDefaultItem {
  /**
   * heading field in *Section2 → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: section2.items[].heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.RichTextField;

  /**
   * description field in *Section2 → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: section2.items[].description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;
}

/**
 * Default variation for Section2 Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type Section2SliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<Section2SliceDefaultPrimary>,
  Simplify<Section2SliceDefaultItem>
>;

/**
 * Slice variation for *Section2*
 */
type Section2SliceVariation = Section2SliceDefault;

/**
 * Section2 Shared Slice
 *
 * - **API ID**: `section2`
 * - **Description**: Section2
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type Section2Slice = prismic.SharedSlice<
  "section2",
  Section2SliceVariation
>;

/**
 * Primary content in *Section3 → Items*
 */
export interface Section3SliceDefaultItem {
  /**
   * Title field in *Section3 → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: section3.items[].title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * Title Color field in *Section3 → Items*
   *
   * - **Field Type**: Color
   * - **Placeholder**: *None*
   * - **API ID Path**: section3.items[].title_color
   * - **Documentation**: https://prismic.io/docs/field#color
   */
  title_color: prismic.ColorField;

  /**
   * Paragraph field in *Section3 → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: section3.items[].text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text: prismic.RichTextField;

  /**
   * Paragraph Color field in *Section3 → Items*
   *
   * - **Field Type**: Color
   * - **Placeholder**: *None*
   * - **API ID Path**: section3.items[].paragraph_color
   * - **Documentation**: https://prismic.io/docs/field#color
   */
  paragraph_color: prismic.ColorField;

  /**
   * CTA Text field in *Section3 → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: section3.items[].cta_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  cta_text: prismic.KeyTextField;

  /**
   * CTA Link field in *Section3 → Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: section3.items[].cta_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  cta_link: prismic.LinkField;

  /**
   * After CTA Text field in *Section3 → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: section3.items[].after_cta_text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  after_cta_text: prismic.RichTextField;

  /**
   * Image field in *Section3 → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: section3.items[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Keep Image Right field in *Section3 → Items*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: true
   * - **API ID Path**: section3.items[].keep_image_right
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  keep_image_right: prismic.BooleanField;

  /**
   * Background Image field in *Section3 → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: section3.items[].background_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  background_image: prismic.ImageField<never>;

  /**
   * Background Of Small Images field in *Section3 → Items*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: section3.items[].background_of_small_images
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  background_of_small_images: prismic.ContentRelationshipField<"background_of_small_images">;
}

/**
 * Default variation for Section3 Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type Section3SliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  Simplify<Section3SliceDefaultItem>
>;

/**
 * Slice variation for *Section3*
 */
type Section3SliceVariation = Section3SliceDefault;

/**
 * Section3 Shared Slice
 *
 * - **API ID**: `section3`
 * - **Description**: Section3
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type Section3Slice = prismic.SharedSlice<
  "section3",
  Section3SliceVariation
>;

/**
 * Primary content in *SmallBackgroundImage → Primary*
 */
export interface SmallBackgroundImageSliceDefaultPrimary {
  /**
   * Small Background Image field in *SmallBackgroundImage → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: small_background_image.primary.small_background_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  small_background_image: prismic.ImageField<never>;

  /**
   * Top field in *SmallBackgroundImage → Primary*
   *
   * - **Field Type**: Number
   * - **Placeholder**: *None*
   * - **API ID Path**: small_background_image.primary.top
   * - **Documentation**: https://prismic.io/docs/field#number
   */
  top: prismic.NumberField;

  /**
   * Right field in *SmallBackgroundImage → Primary*
   *
   * - **Field Type**: Number
   * - **Placeholder**: *None*
   * - **API ID Path**: small_background_image.primary.right
   * - **Documentation**: https://prismic.io/docs/field#number
   */
  right: prismic.NumberField;

  /**
   * Bottom field in *SmallBackgroundImage → Primary*
   *
   * - **Field Type**: Number
   * - **Placeholder**: *None*
   * - **API ID Path**: small_background_image.primary.bottom
   * - **Documentation**: https://prismic.io/docs/field#number
   */
  bottom: prismic.NumberField;

  /**
   * Left field in *SmallBackgroundImage → Primary*
   *
   * - **Field Type**: Number
   * - **Placeholder**: *None*
   * - **API ID Path**: small_background_image.primary.left
   * - **Documentation**: https://prismic.io/docs/field#number
   */
  left: prismic.NumberField;
}

/**
 * Default variation for SmallBackgroundImage Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SmallBackgroundImageSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<SmallBackgroundImageSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *SmallBackgroundImage*
 */
type SmallBackgroundImageSliceVariation = SmallBackgroundImageSliceDefault;

/**
 * SmallBackgroundImage Shared Slice
 *
 * - **API ID**: `small_background_image`
 * - **Description**: SmallBackgroundImage
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SmallBackgroundImageSlice = prismic.SharedSlice<
  "small_background_image",
  SmallBackgroundImageSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      BackgroundOfSmallImagesDocument,
      BackgroundOfSmallImagesDocumentData,
      BackgroundOfSmallImagesDocumentDataSlicesSlice,
      FooterDocument,
      FooterDocumentData,
      HeaderDocument,
      HeaderDocumentData,
      HomepageDocument,
      HomepageDocumentData,
      HomepageDocumentDataSlicesSlice,
      LandingPageDocument,
      LandingPageDocumentData,
      LandingPageDocumentDataSlicesSlice,
      SettingsDocument,
      SettingsDocumentData,
      AllDocumentTypes,
      HeroSlice,
      HeroSliceDefaultPrimary,
      HeroSliceDefaultItem,
      HeroSliceVariation,
      HeroSliceDefault,
      ReviewsSlice,
      ReviewsSliceDefaultPrimary,
      ReviewsSliceDefaultItem,
      ReviewsSliceVariation,
      ReviewsSliceDefault,
      Section1Slice,
      Section1SliceDefaultPrimary,
      Section1SliceVariation,
      Section1SliceDefault,
      Section2Slice,
      Section2SliceDefaultPrimary,
      Section2SliceDefaultItem,
      Section2SliceVariation,
      Section2SliceDefault,
      Section3Slice,
      Section3SliceDefaultItem,
      Section3SliceVariation,
      Section3SliceDefault,
      SmallBackgroundImageSlice,
      SmallBackgroundImageSliceDefaultPrimary,
      SmallBackgroundImageSliceVariation,
      SmallBackgroundImageSliceDefault,
    };
  }
}
