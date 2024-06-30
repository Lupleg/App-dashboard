"use server";
require("dotenv").config();
const mongoose = require("mongoose");
const Challenge = require("./models/challengeModel").default;

const challenges = [
  {
    title: "FizzBuzz",
    description:
      "Write a program that prints the numbers from 1 to 100. But for multiples of three print 'Fizz' instead of the number and for the multiples of five print 'Buzz'. For numbers which are multiples of both three and five print 'FizzBuzz'.",
    difficulty: "Easy",
    example_solutions: [
      {
        language: "JavaScript",
        code: `for (let i = 1; i <= 100; i++) {
  let output = "";
  if (i % 3 === 0) output += "Fizz";
  if (i % 5 === 0) output += "Buzz";
  console.log(output || i);
}`,
      },
    ],
  },
  {
    title: "Palindrome Checker",
    description:
      "Write a function that checks if a given string is a palindrome. A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward (ignoring spaces, punctuation, and capitalization).",
    difficulty: "Easy",
    example_solutions: [
      {
        language: "Python",
        code: `def is_palindrome(s):
    s = ''.join(c for c in s if c.isalnum()).lower()
    return s == s[::-1]

print(is_palindrome("A man, a plan, a canal: Panama"))`,
      },
    ],
  },
  {
    title: "Two Sum",
    description:
      "Given an array of integers and a target sum, write a function to find two numbers in the array that add up to the target sum. Return the indices of the two numbers in an array.",
    difficulty: "Medium",
    example_solutions: [
      {
        language: "JavaScript",
        code: `function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }

console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]`,
      },
    ],
  },
  {
    title: "Anagram Checker",
    description:
      "Write a function to check if two given strings are anagrams of each other. An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.",
    difficulty: "Medium",
    example_solutions: [
      {
        language: "Python",
        code: `def is_anagram(s1, s2):
    return sorted(s1.replace(' ', '').lower()) == sorted(s2.replace(' ', '').lower())

print(is_anagram("listen", "silent"))`,
      },
    ],
  },
  {
    title: "Longest Substring Without Repeating Characters",
    description:
      "Given a string, find the length of the longest substring without repeating characters.",
    difficulty: "Hard",
    example_solutions: [
      {
        language: "JavaScript",
        code: `function lengthOfLongestSubstring(s) {
  let maxLength = 0;
  let start = 0;
  const usedChars = {};

  for (let i = 0; i < s.length; i++) {
    const currentChar = s[i];
    if (usedChars[currentChar] !== undefined && usedChars[currentChar] >= start) {
      start = usedChars[currentChar] + 1;
    }
    usedChars[currentChar] = i;
    maxLength = Math.max(maxLength, i - start + 1);
  }

  return maxLength;
}

console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3`,
      },
    ],
  },
];

async function seedDatabase() {
  await mongoose.connect(
    "mongodb+srv://jiridavidpromise:nOreZ5gsUZh6jA9R@luplegdb.sijx3ab.mongodb.net/?retryWrites=true&w=majority&appName=LuplegDB",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );

  await Challenge.deleteMany({});
  await Challenge.insertMany(challenges);
  console.log("Challenges have been added to the database.");
  mongoose.connection.close();
}

seedDatabase().catch((err) => console.error(err));
