#!/usr/bin/env node

const chalk = require('chalk');

// Define colors and styles
const primary = chalk.hex('#33ddff'); // Lighter blue for borders
const secondary = chalk.hex('#36ff33'); // Green for brackets
const accent = chalk.hex('#33ffd1'); // Bright green for URLs
const subtle = chalk.hex('#AEB6BF'); // Subtle gray for dividers
const highlight = chalk.hex('#339cff').bold; // Blue for the name

// Card dimensions - fixed width for better alignment
const width = 54;

// Create borders with exact width
const topBorder = primary('╭' + '─'.repeat(width) + '╮');
const bottomBorder = primary('╰' + '─'.repeat(width) + '╯');

// Function to create a line with perfectly aligned borders
const createLine = (text) => {
  // Strip ANSI codes for accurate length calculation
  const cleanText = text.replace(/\u001b\[\d+(;\d+)*m/g, '');
  const padding = width - cleanText.length;
  return primary('│') + text + ' '.repeat(padding) + primary('│');
};

// Empty line and divider
const emptyLine = createLine(' '.repeat(width));
const divider = createLine(' ' + subtle('━'.repeat(width - 2)) + ' ');

// Build the card with precise spacing
const card = [
  '',
  topBorder,
  emptyLine,
  createLine(
    ' ' +
      secondary('{') +
      highlight('Johan Kuijt') +
      secondary('}') +
      ' ' +
      primary('</') +
      accent('johankuijt.com') +
      primary('>')
  ),
  divider,
  emptyLine,
  createLine(
    ' ' +
      secondary('⚙') +
      '  ' +
      chalk.cyanBright('Work') +
      '    :: ' +
      chalk.white('Freelance Developer @ Re:Stacks')
  ),
  createLine(
    ' ' +
      highlight('★') +
      '  ' +
      chalk.cyanBright('GitHub') +
      '  :: ' +
      chalk.greenBright.underline('https://github.com/yo-han')
  ),
  createLine(
    ' ' +
      chalk.magentaBright('✉') +
      '  ' +
      chalk.cyanBright('Email') +
      '   :: ' +
      chalk.greenBright.underline('hello@johankuijt.com')
  ),
  createLine(
    ' ' +
      chalk.blueBright('⌂') +
      '  ' +
      chalk.cyanBright('Web') +
      '     :: ' +
      chalk.greenBright.underline('https://johankuijt.com')
  ),
  emptyLine,
  divider,
  createLine(
    ' ' +
      subtle('>') +
      ' ' +
      subtle('Run') +
      ' ' +
      secondary('npx') +
      ' ' +
      highlight('johankuijt') +
      ' ' +
      subtle('anytime to see this card')
  ),
  emptyLine,
  bottomBorder,
  '',
].join('\n');

console.log(card);
