import { furtherTheme, introTheme, overviewTheme, inpracticeTheme } from "./Theme";

  export const introItems = [
    {
      text: 'Objectives of the standard',
      path: '/objectives'
    },
    {
      text: 'What is the EN 301 549',
      path: '/what'
    },
    {
        text: 'A brief history',
        path: '/history'
    }];
  export const overviewItems = [
    {
        text: 'The structure of the standard',
        path: '/structure'
    },
    {
        text: 'The chapters of the standard',
        path: '/chapters'
    },
    {
        text: 'Example ICT for which the chapters apply',
        path: '/example-ict'
    }];
  export const inpracticeItems = [
    {
        text: 'Products and services that must conform to the standard',
        path: '/conform'
    },
    {
        text: 'Determining which requirements apply to a product or service',
        path: '/requirements'
    },
    {
        text: 'Determining whether a product or service meets a requirement',
        path: '/test'
    }];
  export const furtherItems = [
    {
        text: 'The decision tree',
        path: '/decision-tree'
    },
    {
        text: 'WCAG free training',
        path: '/wcag'
    },
    {
        text: 'Funka videos',
        path: '/funka'
    }];

    export const allItems = [
        {
            text: 'Introduction',
            color: introTheme.palette.primary,
            subsections: introItems,
        },
        {
            text: 'Overivew',
            color: overviewTheme.palette.primary,
            subsections: overviewItems,
        },
        {
            text: 'In Practice',
            color: inpracticeTheme.palette.primary,
            subsections: inpracticeItems,
        },
        {
            text: 'Further Resources',
            color: furtherTheme.palette.primary,
            subsections: furtherItems,
        }
    ];





    export const menuItems = [
        {
          text: 'Objectives of the standard',
          path: '/objectives'
        },
        {
          text: 'What is the EN 301 549',
          path: '/what'
        },
        {
            text: 'A brief history',
            path: '/history'
        },
        {
            text: 'The chapters of the standard',
            path: '/chapters'
        },
        {
            text: 'The structure of the standard',
            path: '/structure'
        },
        {
            text: 'Example ICT for which the chapters apply',
            path: '/example-ict'
        },
        {
            text: 'Products and services that must conform to the standard',
            path: '/conform'
        },
        {
            text: 'Determining which requirements apply to a product or service',
            path: '/requirements'
        },
        {
            text: 'Determining whether a product or service meets a requirement',
            path: '/test'
        },
        {
            text: 'The Decision Tree',
            path: '/decision-tree'
        },
        {
            text: 'WCAG free training',
            path: '/wcag'
        },
        {
            text: 'Funka videos',
            path: '/funka'
        }
      ];