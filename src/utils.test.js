import should from 'should';
import {toTitleCase, formatUnicorn, snakeCaseToTitle} from './utils';

const caseToTitleCase = [
  {
    name: 'stringUtils_toTitleCase_all_small_caps',
    input: 'hello hallo',
    expected: 'Hello Hallo',
  },
  {
    name: 'stringUtils_toTitleCase_mix_small_caps',
    input: 'hello Hallo',
    expected: 'Hello Hallo',
  }
];

describe('String Utils toTitleCase', () => {
  caseToTitleCase.forEach(item => {
    it(`${item.name}`, () => {
      should(toTitleCase(item.input)).be.equal(item.expected);
    });
  });
});

const caseFormatUnicorn = [
  {
    name: 'stringUtils_formatUnicorn_single_args',
    input: {
      template: 'hello {0}',
      arguments: ['hallo']
    },
    expected: 'hello hallo',
  },
  {
    name: 'stringUtils_formatUnicorn_multiple_args',
    input: {
      template: 'hello {0} {1}',
      arguments: ['hallo', 'hillo']
    },
    expected: 'hello hallo hillo',
  }
];

describe('String Utils formatUnicorn', () => {
  describe('should return string as expected', () => {
    caseFormatUnicorn.forEach(item => {
      it(`${item.name}`, () => {
        should(formatUnicorn(item.input.template, ...item.input.arguments)).be.equal(
          item.expected
        );
      });
    });
  });
});

const caseSnakeCaseToTitle = [
  {
    name: 'stringUtils_snakeCaseToTitle_word',
    input: 'hello',
    expected: 'Hello',
  },
  {
    name: 'stringUtils_snakeCaseToTitle_words',
    input: 'hello_hallo',
    expected: 'Hello Hallo',
  }
];

describe('String Utils snakeCaseToTitle', () => {
  describe('should return string as expected', () => {
    caseSnakeCaseToTitle.forEach(item => {
      it(`${item.name}`, () => {
        should(snakeCaseToTitle(item.input)).be.equal(
          item.expected
        );
      });
    });
  });
});
