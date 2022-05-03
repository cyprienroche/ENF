import DecisionTree from "../pages/FurtherResources/DecisionTree";
import Funka from "../pages/FurtherResources/Funka";
import WCAG from "../pages/FurtherResources/WCAG";
import History from "../pages/Introduction/History";
import Objectives from "../pages/Introduction/Objectives";
import What from "../pages/Introduction/What";
import Chapters from "../pages/Overview/Chapters";
import ExampleICT from "../pages/Overview/ExampleICT";
import Structure from "../pages/Overview/Structure";
import Conform from "../pages/Practice/Conform";
import Requirements from "../pages/Practice/Requirements";
import Test from "../pages/Practice/Test";
import { furtherTheme, introTheme, overviewTheme, inpracticeTheme } from "./Theme";

  export const homePath="/ENF/";

  export const introItems = [
    {
      text: 'Objectives of the standard',
      path: `${homePath}objectives`,
      file: <Objectives />,
    },
    {
      text: 'What is the EN 301 549',
      path: `${homePath}what`,
      file: <What />,
    },
    {
        text: 'A brief history',
        path: `${homePath}history`,
        file: <History />,
    }];
  export const overviewItems = [
    {
        text: 'The structure of the standard',
        path: `${homePath}structure`,
        file: <Structure />,
    },
    {
        text: 'The chapters of the standard',
        path: `${homePath}chapters`,
        file: <Chapters />,
    },
    {
        text: 'Example ICT for which the chapters apply',
        path: `${homePath}example-ict`,
        file: <ExampleICT />,
    }];
  export const inpracticeItems = [
    {
        text: 'Products and services that must conform to the standard',
        path: `${homePath}conform`,
        file: <Conform />,
    },
    {
        text: 'Determining which requirements apply to a product or service',
        path: `${homePath}requirements`,
        file: <Requirements />,
    },
    {
        text: 'Determining whether a product or service meets a requirement',
        path: `${homePath}test`,
        file: <Test />,
    }];
  export const furtherItems = [
    {
        text: 'The decision tree',
        path: `${homePath}decision-tree`,
        file: <DecisionTree />,
    },
    {
        text: 'WCAG free training',
        path: `${homePath}wcag`,
        file: <WCAG />,
    },
    {
        text: 'Funka videos',
        path: `${homePath}funka`,
        file: <Funka />,
    }];

    export const allItems = [
        {
            text: 'Introduction',
            theme: introTheme,
            subsections: introItems,
        },
        {
            text: 'Overivew',
            theme: overviewTheme,
            subsections: overviewItems,
        },
        {
            text: 'In Practice',
            theme: inpracticeTheme,
            subsections: inpracticeItems,
        },
        {
            text: 'Further Resources',
            theme: furtherTheme,
            subsections: furtherItems,
        }
    ];