import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from './App'
import testTexts from "../i18n/index.json"

describe('Module 4 Project Tests', () => {
  describe('English Language', () => {
    /*
      👉 TASK 1 One test is done for you as an example.
    */
    test(`TEXT_HEADING_CREATE_ACCOUNT is visible`, () => {
      render(<App lang="en" />)
      expect(screen.getByText("Create an Account")).toBeVisible()
    })
     test("Text content is visible", () => {
      render(<App lang="en"/>)
        expect(screen.getByText(testTexts.en.TEXT_FAV_LANG_JS))
        expect(screen.getByText(testTexts.en.TEXT_FAV_LANG_RUST))
        expect(screen.getByText(testTexts.en.TEXT_OPT_FAV_FOOD_1))
        expect(screen.getByText(testTexts.en.TEXT_OPT_FAV_FOOD_2))
        expect(screen.getByText(testTexts.en.TEXT_OPT_FAV_FOOD_3))
        expect(screen.getByText(testTexts.en.TEXT_OPT_FAV_FOOD_4))
        expect(screen.getByText(testTexts.en.TEXT_SUBMIT))
        expect(screen.getByText(testTexts.en.TEXT_FAV_LANG))
    })
    test("Label Texts are visible", () => {
      render(<App lang="en"/>)
      expect(screen.getByLabelText(testTexts.en.LABEL_USERNAME))
      expect(screen.getByLabelText(testTexts.en.LABEL_FAV_FOOD))
      expect(screen.getByLabelText(testTexts.en.LABEL_ACCEPT_TERMS))
    })
    test("PLACEHOLDER_USERNAME is visible", () => {
      render(<App lang="en" />)
      expect(screen.getByPlaceholderText(testTexts.en.PLACEHOLDER_USERNAME))
    })
  })

  describe('Spanish Language', () => {
    /*
      👉 TASK 3 This is done after making the UI multilingual.
    */
      test(`TEXT_HEADING_CREATE_ACCOUNT is visible`, () => {
        render(<App lang="esp" />)
        expect(screen.getByText(testTexts.esp.TEXT_HEADING_CREATE_ACCOUNT)).toBeVisible()
      })
      test("Text content is visible", () => {
        render(<App lang="esp"/>)
        expect(screen.getByText(testTexts.esp.TEXT_FAV_LANG_JS))
        expect(screen.getByText(testTexts.esp.TEXT_FAV_LANG_RUST))
        expect(screen.getByText(testTexts.esp.TEXT_OPT_FAV_FOOD_1))
        expect(screen.getByText(testTexts.esp.TEXT_OPT_FAV_FOOD_2))
        expect(screen.getByText(testTexts.esp.TEXT_OPT_FAV_FOOD_3))
        expect(screen.getByText(testTexts.esp.TEXT_OPT_FAV_FOOD_4))
        expect(screen.getByText(testTexts.esp.TEXT_SUBMIT))
        expect(screen.getByText(testTexts.esp.TEXT_FAV_LANG))
      })
      test("Label Texts are visible", () => {
        render(<App lang="esp"/>)
        expect(screen.getByLabelText(testTexts.esp.LABEL_USERNAME))
        expect(screen.getByLabelText(testTexts.esp.LABEL_FAV_FOOD))
        expect(screen.getByLabelText(testTexts.esp.LABEL_ACCEPT_TERMS))
      })
      test("PLACEHOLDER_USERNAME is visible", () => {
        render(<App lang="esp" />)
        expect(screen.getByPlaceholderText(testTexts.esp.PLACEHOLDER_USERNAME))
      })
  })

  describe('getEntriesByKeyPrefix', () => {
    let objSample = {
      abc_1: "data_abc_1",
      abc_2: "data_abc_2",
      xyz_1: "data_xyz_1",
      abc_3: "data_abc_3",
    }
    let string1= "abc"
    let string2= "xyz"
    test('can extract the correct data, abc', () => {
      expect(getEntriesByKeyPrefix(objSample, "abc"))
      .toEqual([
        ["abc_1", "data_abc_1"],
        ["abc_2", "data_abc_2"],
        ["abc_3", "data_abc_3"]
      ])
    })
    test("can extract the correct data, xyz", () => {
      expect(getEntriesByKeyPrefix(objSample, "xyz"))
      .toEqual([["xyz_1", "data_xyz_1"]])
    })
    })
    /*
      👉 TASK 4 part 2

      Implement the function `getEntriesByKeyPrefix` below
      and then come back here and write a few tests
      to ensure it works as expected.

      Although it should be noted that commonly,
      the tests are written _before_ implementing
      the function being tested.
    */
})
function getEntriesByKeyPrefix(obj, keyPrefix) {
  let result = []
  let prefix = `${keyPrefix}_`
  let preLength = prefix.length
  for (let key in obj) {
    if (key.slice(0, preLength) == prefix) {
      result.push([key, obj[key]])
    }
  }
  return result
}
  /*
    👉 TASK 4 part 1

    Implement a function that takes as first argument an object `obj` such as this:

    {
      abc_1: "data_abc_1",
      abc_2: "data_abc_2",
      xyz_1: "data_xyz_1",
      abc_3: "data_abc_3",
    }

    and takes as second argument a string `keyPrefix` such as this: "abc"

    and returns an array of arrays such as this (for the arguments given in the examples above):

    [
      ["abc_1", "data_abc_1"],
      ["abc_2", "data_abc_2"],
      ["abc_3", "data_abc_3"],
    ]

    If the function is passed the same `obj` as above but a `keyPrefix` of "xyz" then it would return:

    [
      ["xyz_1", "data_xyz_1"],
    ]

    If the function is passed the same `obj` as above but a `keyPrefix` of "foo" then it would return the empty array.

    The function looks inside the object `obj`, finds all properties whose property names begin
    with the `keyPrefix` given (followed by an underscore), and reorganizes the information before returning it.
    The properties that match the `keyPrefix` are returned inside an array holding key-value-pair sub-arrays.

  */
