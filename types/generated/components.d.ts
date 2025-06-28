import type { Schema, Struct } from '@strapi/strapi';

export interface CoursesCurriculum extends Struct.ComponentSchema {
  collectionName: 'components_courses_curricula';
  info: {
    displayName: 'Curriculum';
    icon: 'book';
  };
  attributes: {
    unitsList: Schema.Attribute.Component<'courses.unit', true>;
  };
}

export interface CoursesDetails extends Struct.ComponentSchema {
  collectionName: 'components_courses_details';
  info: {
    displayName: 'Details';
    icon: 'bulletList';
  };
  attributes: {
    availableSeats: Schema.Attribute.Integer & Schema.Attribute.Required;
    durationInWeeks: Schema.Attribute.Integer & Schema.Attribute.Required;
    hoursPerWeek: Schema.Attribute.BigInteger & Schema.Attribute.Required;
    level: Schema.Attribute.Enumeration<
      ['Principiante', 'Intermedio', 'Avanzado', 'Experto']
    > &
      Schema.Attribute.Required;
    requirements: Schema.Attribute.JSON;
    startDate: Schema.Attribute.Date & Schema.Attribute.Required;
    whoIsThisFor: Schema.Attribute.Text;
  };
}

export interface CoursesFaQs extends Struct.ComponentSchema {
  collectionName: 'components_courses_fa_qs';
  info: {
    displayName: 'FAQs';
    icon: 'discuss';
  };
  attributes: {
    questionsList: Schema.Attribute.Component<'courses.faq', true>;
  };
}

export interface CoursesFaq extends Struct.ComponentSchema {
  collectionName: 'components_courses_faqs';
  info: {
    displayName: 'faq';
    icon: 'discuss';
  };
  attributes: {
    answer: Schema.Attribute.Text & Schema.Attribute.Required;
    question: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CoursesMedia extends Struct.ComponentSchema {
  collectionName: 'components_courses_media';
  info: {
    displayName: 'Media';
    icon: 'monitor';
  };
  attributes: {
    images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    vslUrl: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CoursesOverview extends Struct.ComponentSchema {
  collectionName: 'components_courses_overviews';
  info: {
    displayName: 'Overview';
    icon: 'archive';
  };
  attributes: {
    features: Schema.Attribute.JSON & Schema.Attribute.Required;
    longDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    outcomes: Schema.Attribute.JSON & Schema.Attribute.Required;
    shortDescription: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CoursesUnit extends Struct.ComponentSchema {
  collectionName: 'components_courses_units';
  info: {
    displayName: 'unit';
    icon: 'book';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    topics: Schema.Attribute.JSON & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'courses.curriculum': CoursesCurriculum;
      'courses.details': CoursesDetails;
      'courses.fa-qs': CoursesFaQs;
      'courses.faq': CoursesFaq;
      'courses.media': CoursesMedia;
      'courses.overview': CoursesOverview;
      'courses.unit': CoursesUnit;
    }
  }
}
