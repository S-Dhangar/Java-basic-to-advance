// JavaScript Database of 300 Curated Java DSA Questions
const dsaQuestions = [
    // ----------------------------------------------------
    // MODULE 1: Arrays & Basic Syntax (1 - 25)
    // ----------------------------------------------------
    {
        id: 1,
        title: "Two Sum",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/two-sum/",
        topics: ["Arrays", "HashMap"],
        focus: "Use HashMap for O(n) one-pass lookup.",
        hint: "Store values and their indices. For each element, check if target - nums[i] is already in the map."
    },
    {
        id: 2,
        title: "Remove Duplicates from Sorted Array",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/remove-duplicates-from-sorted-array/",
        topics: ["Arrays", "Two Pointers"],
        focus: "In-place modification using a slow runner index.",
        hint: "Use two pointers: one to write unique elements and another to scan the sorted array."
    },
    {
        id: 3,
        title: "Remove Element",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/remove-element/",
        topics: ["Arrays", "Two Pointers"],
        focus: "In-place element removal.",
        hint: "Maintain a write index. Scan the array and copy non-target elements to the write index."
    },
    {
        id: 4,
        title: "Search Insert Position",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/search-insert-position/",
        topics: ["Arrays", "Binary Search"],
        focus: "Standard binary search implementation.",
        hint: "Find insert index using low + (high - low)/2. Returns low when target is not found."
    },
    {
        id: 5,
        title: "Merge Sorted Array",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/merge-sorted-array/",
        topics: ["Arrays", "Two Pointers"],
        focus: "Fill target array backwards from the end.",
        hint: "Start comparing elements from the end of both arrays to avoid overwriting elements in nums1."
    },
    {
        id: 6,
        title: "Plus One",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/plus-one/",
        topics: ["Arrays", "Math"],
        focus: "Handling carry addition in arrays.",
        hint: "Loop backwards, increment digit if < 9 and return. Otherwise set to 0. If all 9s, create new array of size n+1."
    },
    {
        id: 7,
        title: "Majority Element",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/majority-element/",
        topics: ["Arrays", "Greedy"],
        focus: "Boyer-Moore Voting Algorithm.",
        hint: "Keep candidate and count. If count becomes 0, pick current element as candidate. Increment/decrement count."
    },
    {
        id: 8,
        title: "Move Zeroes",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/move-zeroes/",
        topics: ["Arrays", "Two Pointers"],
        focus: "Preserving relative order with in-place swaps.",
        hint: "Iterate with a pointer to place non-zero elements, then fill the remainder of the array with zeroes."
    },
    {
        id: 9,
        title: "Best Time to Buy and Sell Stock",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
        topics: ["Arrays", "Dynamic Programming"],
        focus: "One-pass tracking of min price and max profit.",
        hint: "Track the minimum price seen so far. The profit on any day is current price minus minimum price."
    },
    {
        id: 10,
        title: "Single Number",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/single-number/",
        topics: ["Arrays", "Bit Manipulation"],
        focus: "XOR operator logic (a ^ a = 0).",
        hint: "XOR all numbers in the array. Duplicates cancel out, leaving the unique element."
    },
    {
        id: 11,
        title: "Pascal's Triangle",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/pascals-triangle/",
        topics: ["Arrays", "Math"],
        focus: "Nested loops & ArrayList building.",
        hint: "Generate rows sequentially. Cell values are sums of the two cells directly above it in the previous row."
    },
    {
        id: 12,
        title: "Pascal's Triangle II",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/pascals-triangle-ii/",
        topics: ["Arrays", "Math"],
        focus: "Optimizing memory to O(k) space using a single list.",
        hint: "Generate row elements from right to left to avoid modifying values required for subsequent columns."
    },
    {
        id: 13,
        title: "Contains Duplicate",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/contains-duplicate/",
        topics: ["Arrays", "HashSet"],
        focus: "HashSet for constant-time lookups.",
        hint: "Add elements to a HashSet. If add() returns false, a duplicate is found."
    },
    {
        id: 14,
        title: "Contains Duplicate II",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/contains-duplicate-ii/",
        topics: ["Arrays", "HashMap"],
        focus: "Sliding window or HashMap storage of indices.",
        hint: "Use HashMap to store value and index. If duplicate found and difference in indices is <= k, return true."
    },
    {
        id: 15,
        title: "Missing Number",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/missing-number/",
        topics: ["Arrays", "Math"],
        focus: "Sum formula: n*(n+1)/2 vs Array Sum.",
        hint: "Compute the expected sum of 0 to n. Subtract actual sum of array elements to find the missing value."
    },
    {
        id: 16,
        title: "Intersection of Two Arrays",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/intersection-of-two-arrays/",
        topics: ["Arrays", "HashSet"],
        focus: "Using HashSet to filter distinct intersections.",
        hint: "Put first array into a HashSet, check elements of second array, add hits to a result Set, then convert to int[]."
    },
    {
        id: 17,
        title: "Intersection of Two Arrays II",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/intersection-of-two-arrays-ii/",
        topics: ["Arrays", "HashMap"],
        focus: "Frequency counting Map logic.",
        hint: "Use a HashMap to store frequencies of first array, then decrement frequency as matches are found in the second."
    },
    {
        id: 18,
        title: "Third Maximum Number",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/third-maximum-number/",
        topics: ["Arrays", "Sorting"],
        focus: "Using TreeSets or tracking three maximum variables.",
        hint: "Use three variables (Integer pointers) to track the 1st, 2nd, and 3rd distinct maximums dynamically."
    },
    {
        id: 19,
        title: "Find All Numbers Disappeared in an Array",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/",
        topics: ["Arrays", "HashMap"],
        focus: "In-place array index negation technique.",
        hint: "Iterate through the array; use element values as indices and negate the numbers at those indices."
    },
    {
        id: 20,
        title: "Max Consecutive Ones",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/max-consecutive-ones/",
        topics: ["Arrays"],
        focus: "Linear counter variable management.",
        hint: "Iterate and count consecutive 1s. Reset count to 0 when encountering 0, updating global max at each step."
    },
    {
        id: 21,
        title: "Can Place Flowers",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/can-place-flowers/",
        topics: ["Arrays", "Greedy"],
        focus: "Index boundary checking tricks.",
        hint: "Check if left, center, and right plots are all empty (or out of bounds) to place a flower."
    },
    {
        id: 22,
        title: "Array Partition",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/array-partition/",
        topics: ["Arrays", "Sorting"],
        focus: "Sorting to pair values efficiently.",
        hint: "Sort the array and sum elements at even indices (0, 2, 4...) to maximize the sum of pairwise minimums."
    },
    {
        id: 23,
        title: "Non-decreasing Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/non-decreasing-array/",
        topics: ["Arrays"],
        focus: "Greedy state checks of adjacent numbers.",
        hint: "Track count of modifications. If nums[i-1] > nums[i], decide to modify nums[i-1] or nums[i] based on nums[i-2]."
    },
    {
        id: 24,
        title: "Product of Array Except Self",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/product-of-array-except-self/",
        topics: ["Arrays", "Prefix Sum"],
        focus: "Dynamic prefixes & suffixes tracking without division.",
        hint: "Create left prefix product array. Track suffix product in a single variable while going back to build output."
    },
    {
        id: 25,
        title: "Find All Duplicates in an Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-all-duplicates-in-an-array/",
        topics: ["Arrays", "HashMap"],
        focus: "Deduplication via index negation logic.",
        hint: "Since values are 1 to n, negate values at indexes. If you find a value that is already negative, it is a duplicate."
    },

    // ----------------------------------------------------
    // MODULE 2: String Manipulation (26 - 50)
    // ----------------------------------------------------
    {
        id: 26,
        title: "Valid Palindrome",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/valid-palindrome/",
        topics: ["Strings", "Two Pointers"],
        focus: "Character cleaning using Character.isLetterOrDigit.",
        hint: "Clean characters and use two pointers meeting in the middle to match letters."
    },
    {
        id: 27,
        title: "Longest Common Prefix",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/longest-common-prefix/",
        topics: ["Strings"],
        focus: "Horizontal comparison using indexOf/substring.",
        hint: "Compare prefix iteratively with each string. Shorten prefix whenever matching fails."
    },
    {
        id: 28,
        title: "Length of Last Word",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/length-of-last-word/",
        topics: ["Strings"],
        focus: "Iterating backwards & skipping space.",
        hint: "Start from the end. Skip trailing spaces, then count characters until next space."
    },
    {
        id: 29,
        title: "Reverse String",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/reverse-string/",
        topics: ["Strings", "Two Pointers"],
        focus: "In-place char array swap.",
        hint: "Initialize start and end pointers. Swap characters and increment/decrement pointers."
    },
    {
        id: 30,
        title: "Reverse Vowels of a String",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/reverse-vowels-of-a-string/",
        topics: ["Strings", "Two Pointers"],
        focus: "Character check against a Set of vowels.",
        hint: "Use two pointers. Swap only when both pointers point to a vowel, skipping consonants."
    },
    {
        id: 31,
        title: "Valid Anagram",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/valid-anagram/",
        topics: ["Strings", "HashMap"],
        focus: "ASCII count array for standard alphabet.",
        hint: "Create a frequency tracker of size 26. Increment count for string s, decrement count for string t."
    },
    {
        id: 32,
        title: "First Unique Character in a String",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/first-unique-character-in-a-string/",
        topics: ["Strings", "HashMap"],
        focus: "Frequency counting with a character map.",
        hint: "Perform two passes: first to count frequencies of characters, second to find first char with frequency = 1."
    },
    {
        id: 33,
        title: "Find the Difference",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/find-the-difference/",
        topics: ["Strings", "Bit Manipulation"],
        focus: "XOR characters directly to find odd occurrence.",
        hint: "Initialize accumulator to 0. XOR all characters of s and t. The result is the extra character."
    },
    {
        id: 34,
        title: "String to Integer (atoi)",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/string-to-integer-atoi/",
        topics: ["Strings", "Math"],
        focus: "Overflow/underflow checks on multiplication.",
        hint: "Discard leading whitespaces. Read optional sign. Read digits, checking for overflow before updating integer sum."
    },
    {
        id: 35,
        title: "Longest Palindromic Substring",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/longest-palindromic-substring/",
        topics: ["Strings", "Dynamic Programming"],
        focus: "Expand around centers (odd/even length).",
        hint: "Treat each character (and gaps) as the center. Expand outwards to find the longest palindrome substring."
    },
    {
        id: 36,
        title: "Zigzag Conversion",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/zigzag-conversion/",
        topics: ["Strings"],
        focus: "List of StringBuilders for row buckets.",
        hint: "Track current row and direction (up/down). Append characters to dynamic rows, then merge row strings."
    },
    {
        id: 37,
        title: "Reverse Words in a String",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/reverse-words-in-a-string/",
        topics: ["Strings", "Two Pointers"],
        focus: "Splitting with Regex and joining with String.join.",
        hint: "Split string by spaces. Loop backwards and append non-empty strings to StringBuilder."
    },
    {
        id: 38,
        title: "Multiply Strings",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/multiply-strings/",
        topics: ["Strings", "Math"],
        focus: "Grid addition using int array values.",
        hint: "Perform digit-by-digit multiplication. Position [i + j + 1] holds the product, carrying over to [i + j]."
    },
    {
        id: 39,
        title: "Group Anagrams",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/group-anagrams/",
        topics: ["Strings", "HashMap"],
        focus: "HashMap using sorted strings as keys.",
        hint: "For each string, sort its characters to make a key. Group original strings under this key in a HashMap."
    },
    {
        id: 40,
        title: "Compare Version Numbers",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/compare-version-numbers/",
        topics: ["Strings", "Two Pointers"],
        focus: "String splitting and integer conversions.",
        hint: "Split strings by '.'. Parse integer arrays, filling missing indexes of the shorter list with 0."
    },
    {
        id: 41,
        title: "Minimum Window Substring",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/minimum-window-substring/",
        topics: ["Strings", "Sliding Window"],
        focus: "Sliding window template with char count check.",
        hint: "Contract window using a left pointer once all target characters are inside, updating the minimum window size."
    },
    {
        id: 42,
        title: "Text Justification",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/text-justification/",
        topics: ["Strings"],
        focus: "Complex string spacing math details.",
        hint: "Group words into lines. Distribute spaces as evenly as possible, with extra spaces on the left."
    },
    {
        id: 43,
        title: "Is Subsequence",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/is-subsequence/",
        topics: ["Strings", "Two Pointers"],
        focus: "Character matching sequence with two pointers.",
        hint: "Iterate both strings. Advance source string pointer only when characters match target string pointer."
    },
    {
        id: 44,
        title: "Goat Latin",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/goat-latin/",
        topics: ["Strings"],
        focus: "Vowel set matches, StringBuilder parsing.",
        hint: "Check first letter of each word. Shift consonants to end, add 'ma', and add dynamic suffix 'a' markers."
    },
    {
        id: 45,
        title: "Robot Return to Origin",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/robot-return-to-origin/",
        topics: ["Strings"],
        focus: "Coordinate coordinate update loops.",
        hint: "Initialize coordinates (x, y) = (0, 0). Loop moves, updating coordinates. Returns true if (x,y) is back to (0,0)."
    },
    {
        id: 46,
        title: "Rotate String",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/rotate-string/",
        topics: ["Strings"],
        focus: "String concatenation check trick.",
        hint: "Verify lengths are equal. Check if the rotated string is a substring of target concat string (s + s)."
    },
    {
        id: 47,
        title: "Valid Palindrome II",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/valid-palindrome-ii/",
        topics: ["Strings", "Two Pointers"],
        focus: "One mismatch character skip condition.",
        hint: "When pointers mismatch, check if remaining sub-arrays are palindromes by skipping left or right character."
    },
    {
        id: 48,
        title: "Backspace String Compare",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/backspace-string-compare/",
        topics: ["Strings", "Stack"],
        focus: "Simulating backspaces using Stack or pointers.",
        hint: "Process string using StringBuilder to build final characters (deleting last index if char is '#'). Compare results."
    },
    {
        id: 49,
        title: "Custom Sort String",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/custom-sort-string/",
        topics: ["Strings", "Sorting"],
        focus: "Frequency counting & ordering array maps.",
        hint: "Count character frequencies in s. Append characters to result in order of order string, then add remaining characters."
    },
    {
        id: 50,
        title: "Shifting Letters",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/shifting-letters/",
        topics: ["Strings"],
        focus: "Suffix sum shifts to avoid arithmetic overflow.",
        hint: "Calculate shifts backwards as cumulative suffix sums. Shift each character in s accordingly using modulo 26."
    },

    // ----------------------------------------------------
    // MODULE 3: Two Pointers (51 - 75)
    // ----------------------------------------------------
    {
        id: 51,
        title: "3Sum",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/3sum/",
        topics: ["Two Pointers", "Sorting"],
        focus: "Sorting & avoiding duplicates dynamically.",
        hint: "Sort array. Fix first element, then use two pointers to find remaining two sum matches, skipping duplicates."
    },
    {
        id: 52,
        title: "3Sum Closest",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/3sum-closest/",
        topics: ["Two Pointers", "Sorting"],
        focus: "Difference comparisons during pointer convergence.",
        hint: "Sort array. Use nested loop + two pointers. Keep track of the sum that yields minimum absolute difference."
    },
    {
        id: 53,
        title: "4Sum",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/4sum/",
        topics: ["Two Pointers", "Sorting"],
        focus: "Reducing complexity by nesting recursive helper parameters.",
        hint: "Use nested loops to fix first two numbers, then use two pointers. Skip duplicates to optimize runtime."
    },
    {
        id: 54,
        title: "Container With Most Water",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/container-with-most-water/",
        topics: ["Two Pointers"],
        focus: "Greedy movement of pointers based on height.",
        hint: "Set pointers at ends. Move the pointer pointing to the shorter vertical line inwards, tracking max area."
    },
    {
        id: 55,
        title: "Sort Colors",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/sort-colors/",
        topics: ["Two Pointers", "Sorting"],
        focus: "Dutch National Flag Algorithm.",
        hint: "Maintain three pointers: zero (low boundary), two (high boundary), and current scanner pointer. Swap in-place."
    },
    {
        id: 56,
        title: "Two Sum II - Input Array Is Sorted",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/",
        topics: ["Two Pointers", "Binary Search"],
        focus: "Convergence pointer logic.",
        hint: "Set pointers at start and end. If sum is too high, decrement right; if too low, increment left."
    },
    {
        id: 57,
        title: "Remove Duplicates from Sorted Array II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/",
        topics: ["Two Pointers"],
        focus: "Modified write pointer offset checks.",
        hint: "Write index increments only when current element is larger than the element at index - 2."
    },
    {
        id: 58,
        title: "Minimum Size Subarray Sum",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-size-subarray-sum/",
        topics: ["Two Pointers", "Sliding Window"],
        focus: "Dynamic window contraction.",
        hint: "Expand window with right pointer. Once sum >= target, contract window with left pointer to find minimum length."
    },
    {
        id: 59,
        title: "Fruit Into Baskets",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/fruit-into-baskets/",
        topics: ["Two Pointers", "Sliding Window"],
        focus: "Two-type element collection map.",
        hint: "Track frequencies in a window. When size > 2, shrink left until we only have at most two distinct types."
    },
    {
        id: 60,
        title: "Longest Mountain in Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/longest-mountain-in-array/",
        topics: ["Two Pointers"],
        focus: "Peak traversal scan loops.",
        hint: "Find peaks where left & right sides are lower. Expand left and right from peaks to count mountain size."
    },
    {
        id: 61,
        title: "Bag of Tokens",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/bag-of-tokens/",
        topics: ["Two Pointers", "Greedy"],
        focus: "Sort and optimize score vs power options.",
        hint: "Sort tokens. Play smallest token face up to gain score; play largest token face down to gain power."
    },
    {
        id: 62,
        title: "Interval List Intersections",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/interval-list-intersections/",
        topics: ["Two Pointers"],
        focus: "Comparing boundaries of two arrays.",
        hint: "Find overlap: start = max(start1, start2) and end = min(end1, end2). Increment pointer of interval with smaller end."
    },
    {
        id: 63,
        title: "Find the Duplicate Number",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-the-duplicate-number/",
        topics: ["Two Pointers", "Binary Search"],
        focus: "Floyd's Cycle Detection (Tortoise and Hare).",
        hint: "Use array indexes as next pointers. Find intersection point of slow/fast pointers, then reset and meet at cycle start."
    },
    {
        id: 64,
        title: "Trapping Rain Water",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/trapping-rain-water/",
        topics: ["Two Pointers", "Stack"],
        focus: "Two pointer tracking of boundary heights.",
        hint: "Initialize left/right pointers and leftMax/rightMax. Move pointers inwards, accumulating water based on minimum wall."
    },
    {
        id: 65,
        title: "Valid Triangle Number",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/valid-triangle-number/",
        topics: ["Two Pointers", "Sorting"],
        focus: "Checking triangle inequality condition.",
        hint: "Sort array. Fix third side from end. Check start + end > third. If so, all elements between start and end are valid."
    },
    {
        id: 66,
        title: "Push Dominoes",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/push-dominoes/",
        topics: ["Two Pointers", "Strings"],
        focus: "Distance calculations between forces.",
        hint: "Locate R and L indices. Calculate forces on intermediate empty slots using relative distance metrics."
    },
    {
        id: 67,
        title: "Longest Turbulent Subarray",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/longest-turbulent-subarray/",
        topics: ["Two Pointers", "Sliding Window"],
        focus: "Alternating comparison flags.",
        hint: "Compare consecutive items. Switch comparison directions, resetting window when alternation fails."
    },
    {
        id: 68,
        title: "Max Consecutive Ones III",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/max-consecutive-ones-iii/",
        topics: ["Two Pointers", "Sliding Window"],
        focus: "Max zeros window condition.",
        hint: "Allow k zero flips. Expand right, decrement k when zero seen. If k < 0, contract left until a zero is removed."
    },
    {
        id: 69,
        title: "Subarrays with K Different Integers",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/subarrays-with-k-different-integers/",
        topics: ["Two Pointers", "Sliding Window"],
        focus: "Helper logic: exact(k) = atMost(k) - atMost(k-1).",
        hint: "Compute count of subarrays with at most k distinct elements, then subtract count of subarrays with at most k-1."
    },
    {
        id: 70,
        title: "Sort Array By Parity",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/sort-array-by-parity/",
        topics: ["Two Pointers"],
        focus: "Parity division sorting in-place.",
        hint: "Initialize start and end pointers. Swap elements when even is found at end and odd at start."
    },
    {
        id: 71,
        title: "Squares of a Sorted Array",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/squares-of-a-sorted-array/",
        topics: ["Two Pointers", "Sorting"],
        focus: "Merging squared absolute values.",
        hint: "Use pointers at both ends. Compare square values, inserting the larger square at the end of output array."
    },
    {
        id: 72,
        title: "Merge Strings Alternately",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/merge-strings-alternately/",
        topics: ["Two Pointers", "Strings"],
        focus: "Dual index tracking.",
        hint: "Initialize pointers for both strings. Loop, alternating appends to a StringBuilder until both pointers exceed boundaries."
    },
    {
        id: 73,
        title: "Reverse String II",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/reverse-string-ii/",
        topics: ["Two Pointers", "Strings"],
        focus: "Index hopping checks (jump of 2k).",
        hint: "Iterate by 2k steps. In each step, reverse the first k characters of the sub-segment."
    },
    {
        id: 74,
        title: "Divide Players Into Teams of Equal Skill",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/divide-players-into-teams-of-equal-skill/",
        topics: ["Two Pointers", "Sorting"],
        focus: "Target sum verification on sorted array.",
        hint: "Sort skills. Team pairing sum must be skill[0] + skill[n-1]. Verify all pairs sum to this, summing products."
    },
    {
        id: 75,
        title: "Compare Strings by Frequency of the Smallest Character",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/compare-strings-by-frequency-of-the-smallest-character/",
        topics: ["Two Pointers", "Binary Search"],
        focus: "Frequency counting & sorting lists.",
        hint: "Map lists to smallest char frequencies. Sort target counts, and use binary search to count higher frequencies."
    },

    // ----------------------------------------------------
    // MODULE 4: Sliding Window (76 - 95)
    // ----------------------------------------------------
    {
        id: 76,
        title: "Longest Substring Without Repeating Characters",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
        topics: ["Sliding Window", "HashSet"],
        focus: "HashSet or array representation of characters.",
        hint: "Expand right pointer, adding to Set. If repeat is found, shrink left pointer until duplicate is removed."
    },
    {
        id: 77,
        title: "Minimum Window Substring",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/minimum-window-substring/",
        topics: ["Sliding Window", "HashMap"],
        focus: "Frequency maps comparison logic.",
        hint: "Maintain character frequencies of target string. Contract left pointer once target conditions are satisfied."
    },
    {
        id: 78,
        title: "Permutation in String",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/permutation-in-string/",
        topics: ["Sliding Window", "HashMap"],
        focus: "Fixed size sliding window frequency checks.",
        hint: "Use character frequency array of size 26. Maintain sliding window of size s1, comparing maps."
    },
    {
        id: 79,
        title: "Find All Anagrams in a String",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-all-anagrams-in-a-string/",
        topics: ["Sliding Window", "HashMap"],
        focus: "Fixed window size index recording.",
        hint: "Maintain 26-char counts of size p. Store left index in result list when sliding counts match target counts."
    },
    {
        id: 80,
        title: "Longest Repeating Character Replacement",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/longest-repeating-character-replacement/",
        topics: ["Sliding Window"],
        focus: "Tracking max frequency within current window.",
        hint: "Maintain char count in window. If (window size - max frequency of any char) > k, shrink window from left."
    },
    {
        id: 81,
        title: "Max Consecutive Ones III",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/max-consecutive-ones-iii/",
        topics: ["Sliding Window", "Two Pointers"],
        focus: "Dynamic resizing variable limit checks.",
        hint: "Maintain zero count in current window. Shrink from left if zeros exceed k."
    },
    {
        id: 82,
        title: "Subarrays with K Different Integers",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/subarrays-with-k-different-integers/",
        topics: ["Sliding Window", "HashMap"],
        focus: "Exact match subtraction calculations.",
        hint: "Define atMost(k) function using hashmap. Return atMost(k) - atMost(k-1)."
    },
    {
        id: 83,
        title: "Minimum Swaps to Group All 1's Together II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-swaps-to-group-all-1s-together-ii/",
        topics: ["Sliding Window"],
        focus: "Circular array simulation using modulo index.",
        hint: "Calculate total 1s as window size. Slide window over array (and wrapped elements) to count maximum 1s."
    },
    {
        id: 84,
        title: "Maximum Number of Vowels in a Substring of Given Length",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/",
        topics: ["Sliding Window"],
        focus: "Vowel lookup optimization.",
        hint: "Slide fixed window of size k. Track current vowel count, updating max count at each step."
    },
    {
        id: 85,
        title: "Number of Subarrays of Size K and Average Greater than or Equal to Threshold",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/number-of-subarrays-of-size-k-and-average-greater-than-or-equal-to-threshold/",
        topics: ["Sliding Window"],
        focus: "Sum conversion comparison (sum >= k * threshold).",
        hint: "Keep sum of size k. Update sum by adding new right element and subtracting old left element."
    },
    {
        id: 86,
        title: "Minimum Window Subsequence",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/minimum-window-subsequence/",
        topics: ["Sliding Window", "Dynamic Programming"],
        focus: "Two pointers with reverse matching pass.",
        hint: "Find first match using forward scans. Perform reverse matching from right side to optimize window starting point."
    },
    {
        id: 87,
        title: "Sliding Window Maximum",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/sliding-window-maximum/",
        topics: ["Sliding Window", "Queue"],
        focus: "Monotonic Deque (Double Ended Queue).",
        hint: "Keep indices in Deque in descending order of values. Pop indices out of window size or smaller than new elements."
    },
    {
        id: 88,
        title: "Longest Substring with At Most K Distinct Characters",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/",
        topics: ["Sliding Window", "HashMap"],
        focus: "Character map frequency shrinkage.",
        hint: "Store character counts. Shrink window from left until Map size <= k."
    },
    {
        id: 89,
        title: "Maximum Points You Can Obtain from Cards",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/",
        topics: ["Sliding Window"],
        focus: "Complement window sum minimization.",
        hint: "Find the minimum subarray sum of size (n - k). The remaining k elements yield the maximum points."
    },
    {
        id: 90,
        title: "Frequency of the Most Frequent Element",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/frequency-of-the-most-frequent-element/",
        topics: ["Sliding Window", "Sorting"],
        focus: "Sorted array prefix sum comparisons.",
        hint: "Sort array. Expand right pointer. Shrink left if (nums[right]*window_size - current_sum) > k."
    },
    {
        id: 91,
        title: "Subarray Product Less Than K",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/subarray-product-less-than-k/",
        topics: ["Sliding Window"],
        focus: "Accumulating subarray count combinations.",
        hint: "Keep product of window. Shrink left if product >= k. Add (right - left + 1) to result at each valid window."
    },
    {
        id: 92,
        title: "Get Equal Substrings Within Budget",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/get-equal-substrings-within-budget/",
        topics: ["Sliding Window"],
        focus: "Accumulating dynamic conversion cost.",
        hint: "Map absolute differences to costs. Use sliding window to find longest subarray with sum <= maxCost."
    },
    {
        id: 93,
        title: "Maximum Erasure Value",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-erasure-value/",
        topics: ["Sliding Window", "HashSet"],
        focus: "Sum tracking inside dynamic Set window.",
        hint: "Store window elements in HashSet. Slide right, sum values. Shrink left and subtract values if duplicate occurs."
    },
    {
        id: 94,
        title: "K Radius Subarray Averages",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/k-radius-subarray-averages/",
        topics: ["Sliding Window"],
        focus: "Fixed size k-radius sum division.",
        hint: "Calculate sum of size (2*k + 1). Use prefix sums or sliding window updates to compute averages."
    },
    {
        id: 95,
        title: "Take K of Each Character From Left and Right",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/take-k-of-each-character-from-left-and-right/",
        topics: ["Sliding Window"],
        focus: "Inverted sliding window problem subtraction.",
        hint: "Count total frequencies of a, b, c. Find maximum window inside string that does not consume too many of each character."
    },

    // ----------------------------------------------------
    // MODULE 5: Hash Table & HashSet (96 - 120)
    // ----------------------------------------------------
    {
        id: 96,
        title: "Jewels and Stones",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/jewels-and-stones/",
        topics: ["HashSet"],
        focus: "Set membership lookup speeds.",
        hint: "Add all characters of jewels string to a Set. Scan stones and count characters present in Set."
    },
    {
        id: 97,
        title: "Happy Number",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/happy-number/",
        topics: ["HashSet"],
        focus: "Loop checking via history tracking.",
        hint: "Compute sum of digit squares. Add values to HashSet; if value repeats, cycle detected, return false."
    },
    {
        id: 98,
        title: "Isomorphic Strings",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/isomorphic-strings/",
        topics: ["HashMap"],
        focus: "Dual character position maps.",
        hint: "Track last seen positions of characters in both strings. If mismatch occurs at index i, return false."
    },
    {
        id: 99,
        title: "Word Pattern",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/word-pattern/",
        topics: ["HashMap"],
        focus: "Char-to-String pattern mapping.",
        hint: "Split string into words. Map characters to words in a HashMap, ensuring values are uniquely mapped (using containsValue check)."
    },
    {
        id: 100,
        title: "Design HashMap",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/design-hashmap/",
        topics: ["HashMap"],
        focus: "Chaining design using custom node buckets.",
        hint: "Use an array of linked list nodes. Mod key to find bucket, traverse linked list to update/get values."
    },
    {
        id: 101,
        title: "Design HashSet",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/design-hashset/",
        topics: ["HashSet"],
        focus: "Array array hashing indexing.",
        hint: "Design boolean bucket array. Optimize space using nested sub-arrays initialized only when elements hash in."
    },
    {
        id: 102,
        title: "Intersection of Two Arrays",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/intersection-of-two-arrays/",
        topics: ["HashSet"],
        focus: "Intersection filtering using Sets.",
        hint: "Add nums1 to Set. Iterate nums2, matching values. Collect hits in result Set, convert to array."
    },
    {
        id: 103,
        title: "Keyboard Row",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/keyboard-row/",
        topics: ["HashSet"],
        focus: "Mapping chars to keyboards rows.",
        hint: "Store row IDs for keyboard rows in map. For each word, verify all characters match the same row ID."
    },
    {
        id: 104,
        title: "Set Mismatch",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/set-mismatch/",
        topics: ["HashSet"],
        focus: "Tracking duplicates and missing inputs.",
        hint: "Use Set to find duplicate. Sum values to compute difference from expected sum to find the missing item."
    },
    {
        id: 105,
        title: "Find Common Characters",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/find-common-characters/",
        topics: ["HashMap"],
        focus: "Min frequency calculation array maps.",
        hint: "Maintain global min counts. Calculate char frequencies for each string, updating min frequency counts."
    },
    {
        id: 106,
        title: "Unique Number of Occurrences",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/unique-number-of-occurrences/",
        topics: ["HashMap", "HashSet"],
        focus: "Map values to Set elements checks.",
        hint: "Count frequencies in a Map. Insert counts into a HashSet. If size matches, frequencies are unique."
    },
    {
        id: 107,
        title: "Top K Frequent Elements",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/top-k-frequent-elements/",
        topics: ["HashMap", "Heap"],
        focus: "Min-Heap or Bucket Sort logic.",
        hint: "Count frequencies. Use a PriorityQueue of size k, sorting by frequency, or bucket sort by frequency."
    },
    {
        id: 108,
        title: "Group Anagrams",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/group-anagrams/",
        topics: ["HashMap"],
        focus: "HashMap groupings.",
        hint: "Sort word chars to create key. Map key to corresponding Lists of anagram words."
    },
    {
        id: 109,
        title: "Insert Delete GetRandom O(1)",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/insert-delete-getrandom-o1/",
        topics: ["HashMap", "Arrays"],
        focus: "Combining List with Map for O(1) index mappings.",
        hint: "Store values in ArrayList. Map value to index in HashMap. On delete, swap element with last item in list."
    },
    {
        id: 110,
        title: "Subarray Sum Equals K",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/subarray-sum-equals-k/",
        topics: ["HashMap", "Prefix Sum"],
        focus: "Prefix sum frequencies map tracking.",
        hint: "Map running sums to frequency. At current sum, check if (current sum - k) exists in the Map."
    },
    {
        id: 111,
        title: "Copy List with Random Pointer",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/copy-list-with-random-pointer/",
        topics: ["HashMap", "LinkedList"],
        focus: "Node-to-node clone mappings.",
        hint: "Map original node to clone node. Loop twice: once to instantiate copies, once to set next/random pointers."
    },
    {
        id: 112,
        title: "First Missing Positive",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/first-missing-positive/",
        topics: ["HashSet"],
        focus: "In-place hash check or Set storage.",
        hint: "Place each number at index (value - 1) using cyclic swaps, then find the first mismatched index."
    },
    {
        id: 113,
        title: "Grid Game",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/grid-game/",
        topics: ["Prefix Sum"],
        focus: "Prefix/suffix grid path planning.",
        hint: "Calculate suffix sums of row 0 and prefix sums of row 1. Find pivot that minimizes second player's maximum score."
    },
    {
        id: 114,
        title: "Task Scheduler",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/task-scheduler/",
        topics: ["HashMap", "Greedy"],
        focus: "Frequency counting & interval formula calculations.",
        hint: "Find max frequency tasks. Minimum idle spacing calculation relies on count of maximum frequency tasks."
    },
    {
        id: 115,
        title: "Longest Consecutive Sequence",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/longest-consecutive-sequence/",
        topics: ["HashSet"],
        focus: "O(n) set lookups starting at boundaries.",
        hint: "Put elements in HashSet. Iterate elements: if val - 1 is not in Set, start counting sequence length from val."
    },
    {
        id: 116,
        title: "Find All Anagrams in a String",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-all-anagrams-in-a-string/",
        topics: ["HashMap", "Sliding Window"],
        focus: "Frequency map comparison updates.",
        hint: "Keep counts of target pattern. Match dynamically by adjusting map sliding windows."
    },
    {
        id: 117,
        title: "Contiguous Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/contiguous-array/",
        topics: ["HashMap", "Prefix Sum"],
        focus: "Prefix sum balancing indices mapping.",
        hint: "Treat 0 as -1 and 1 as +1. Map running sum to first index. When sum is seen again, update max length."
    },
    {
        id: 118,
        title: "Check Array Pairs Divisible by K",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/check-array-pairs-divisible-by-k/",
        topics: ["HashMap"],
        focus: "Modulo remainder frequencies balance checks.",
        hint: "Calculate mod frequencies. Check if frequency of remainder r matches remainder k - r (and remainder 0 is even)."
    },
    {
        id: 119,
        title: "Range Sum Query 2D - Immutable",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/range-sum-query-2d-immutable/",
        topics: ["Prefix Sum"],
        focus: "2D prefix grid summation.",
        hint: "Precompute 2D prefix sums. Query sum using: dp[r2][c2] - dp[r1-1][c2] - dp[r2][c1-1] + dp[r1-1][c1-1]."
    },
    {
        id: 120,
        title: "LRU Cache",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/lru-cache/",
        topics: ["HashMap", "LinkedList"],
        focus: "Combining Map with custom Doubly Linked List nodes.",
        hint: "Define DLL nodes. HashMap links keys to nodes. Move accessed node to DLL head; remove tail node on overflow."
    },

    // ----------------------------------------------------
    // MODULE 6: Prefix Sum & Matrix (121 - 140)
    // ----------------------------------------------------
    {
        id: 121,
        title: "Range Sum Query - Immutable",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/range-sum-query-immutable/",
        topics: ["Prefix Sum"],
        focus: "Precomputed prefix sums array.",
        hint: "Calculate prefix sums. Range sum [i, j] is sum[j + 1] - sum[i]."
    },
    {
        id: 122,
        title: "Find Pivot Index",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/find-pivot-index/",
        topics: ["Prefix Sum"],
        focus: "Sum balance variable checks.",
        hint: "Calculate total sum. Iterate left-to-right, checking if leftSum equals (totalSum - leftSum - nums[i])."
    },
    {
        id: 123,
        title: "Subarray Sum Equals K",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/subarray-sum-equals-k/",
        topics: ["Prefix Sum", "HashMap"],
        focus: "Prefix sum lookup counts.",
        hint: "Use HashMap to track prefix sum frequencies. Check target - currentSum presence at each step."
    },
    {
        id: 124,
        title: "Subarray Sums Divisible by K",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/subarray-sums-divisible-by-k/",
        topics: ["Prefix Sum", "HashMap"],
        focus: "Modulo properties mapping.",
        hint: "Track running sum mod k. Handle negative remainders. Store frequencies in map and accumulate matches."
    },
    {
        id: 125,
        title: "Continuous Subarray Sum",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/continuous-subarray-sum/",
        topics: ["Prefix Sum", "HashMap"],
        focus: "Hashing mod remainders with index storage.",
        hint: "Map running sums mod k to index. If mod value is seen again and distance > 1, returns true."
    },
    {
        id: 126,
        title: "Spiral Matrix",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/spiral-matrix/",
        topics: ["Matrix"],
        focus: "Boundary manipulation loops.",
        hint: "Set boundaries: top, bottom, left, right. Traverse boundaries sequentially, shrinking them inward."
    },
    {
        id: 127,
        title: "Spiral Matrix II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/spiral-matrix-ii/",
        topics: ["Matrix"],
        focus: "Matrix grid spiral assignment.",
        hint: "Maintain boundary pointers. Fill cells from 1 to n^2 sequentially while traversing layers."
    },
    {
        id: 128,
        title: "Rotate Image",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/rotate-image/",
        topics: ["Matrix"],
        focus: "Transpose matrix and then reverse rows.",
        hint: "Convert rows to columns (swap matrix[i][j] with matrix[j][i]). Reverse columns of each row."
    },
    {
        id: 129,
        title: "Set Matrix Zeroes",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/set-matrix-zeroes/",
        topics: ["Matrix"],
        focus: "Using first row/col as markers to save space.",
        hint: "Mark zero indicators in first row and col. Track first row/col updates separately using boolean flags."
    },
    {
        id: 130,
        title: "Search a 2D Matrix",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/search-a-2d-matrix/",
        topics: ["Matrix", "Binary Search"],
        focus: "Treating 2D grid as flattened 1D array.",
        hint: "Run binary search: low=0, high=m*n-1. Mid value mapping is matrix[mid/n][mid%n]."
    },
    {
        id: 131,
        title: "Search a 2D Matrix II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/search-a-2d-matrix-ii/",
        topics: ["Matrix", "Binary Search"],
        focus: "Corner pointer checks (Top-Right / Bottom-Left).",
        hint: "Start at top-right corner. If value > target, move left; if value < target, move down."
    },
    {
        id: 132,
        title: "Diagonal Traverse",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/diagonal-traverse/",
        topics: ["Matrix"],
        focus: "Direction flags and index bounds checks.",
        hint: "Track diagonal boundaries. Handle step adjustments depending on up/down directions."
    },
    {
        id: 133,
        title: "Game of Life",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/game-of-life/",
        topics: ["Matrix"],
        focus: "In-place state transitions using bit flags.",
        hint: "Store transition states in unused bits (e.g. 2 for dead-to-live, 3 for live-to-dead). Apply shifts."
    },
    {
        id: 134,
        title: "Range Sum Query 2D - Immutable",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/range-sum-query-2d-immutable/",
        topics: ["Prefix Sum", "Matrix"],
        focus: "Precomputed area prefix additions.",
        hint: "Use precomputed dp boundaries to return target area in O(1) time."
    },
    {
        id: 135,
        title: "Find the Student that Will Replace the Chalk",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-the-student-that-will-replace-the-chalk/",
        topics: ["Prefix Sum"],
        focus: "Modulo remainder calculations with Binary Search.",
        hint: "Sum chalk array. Modulo k by sum. Use binary search (or subtraction) to find index where sum > k."
    },
    {
        id: 136,
        title: "Corporate Flight Bookings",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/corporate-flight-bookings/",
        topics: ["Prefix Sum"],
        focus: "Difference array (range additions in O(1)).",
        hint: "Apply +seats at index start-1, -seats at index end. Run prefix sum scan to reconstruct bookings."
    },
    {
        id: 137,
        title: "Product of Array Except Self",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/product-of-array-except-self/",
        topics: ["Prefix Sum"],
        focus: "Dual pass calculations (prefix & suffix products).",
        hint: "Store forward products. Backwards loop updates result using dynamic suffix product trackers."
    },
    {
        id: 138,
        title: "Left and Right Sum Differences",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/left-and-right-sum-differences/",
        topics: ["Prefix Sum"],
        focus: "Prefix vs Suffix array sum comparisons.",
        hint: "Sum values. Maintain left sum, compute right sum at each index, storing differences."
    },
    {
        id: 139,
        title: "Matrix Block Sum",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/matrix-block-sum/",
        topics: ["Prefix Sum", "Matrix"],
        focus: "Applying 2D prefix sums over dynamic range blocks.",
        hint: "For each cell, calculate row and column ranges bounding it, then query the precomputed 2D sums."
    },
    {
        id: 140,
        title: "Maximum Sum Circular Subarray",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-sum-circular-subarray/",
        topics: ["Prefix Sum", "Arrays"],
        focus: "Kadane's Algorithm adaptations.",
        hint: "Calculate max subarray sum and min subarray sum. Circular sum is total - min. Beware edge case of all negative inputs."
    },

    // ----------------------------------------------------
    // MODULE 7: Linked List (141 - 160)
    // ----------------------------------------------------
    {
        id: 141,
        title: "Reverse Linked List",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/reverse-linked-list/",
        topics: ["LinkedList"],
        focus: "Iterative pointer updates.",
        hint: "Maintain prev (null), curr (head), and next. Update pointers: curr.next = prev, shift prev and curr."
    },
    {
        id: 142,
        title: "Merge Two Sorted Lists",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/merge-two-sorted-lists/",
        topics: ["LinkedList"],
        focus: "Dummy head node utilization.",
        hint: "Create dummy head. Compare node values, linking dummy's next to the smaller node. Shift nodes."
    },
    {
        id: 143,
        title: "Linked List Cycle",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/linked-list-cycle/",
        topics: ["LinkedList", "Two Pointers"],
        focus: "Floyd's Fast & Slow pointer intersection.",
        hint: "Slow moves 1 step; fast moves 2 steps. If pointers meet, there is a cycle."
    },
    {
        id: 144,
        title: "Linked List Cycle II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/linked-list-cycle-ii/",
        topics: ["LinkedList", "Two Pointers"],
        focus: "Locating loop starting intersection.",
        hint: "Find loop intersection. Reset slow pointer to head. Move both pointers 1 step at a time; they meet at cycle start."
    },
    {
        id: 145,
        title: "Remove Nth Node From End of List",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/",
        topics: ["LinkedList", "Two Pointers"],
        focus: "Pointer delay offsets.",
        hint: "Move fast pointer n steps ahead. Then move slow and fast together until fast reaches end; delete node next to slow."
    },
    {
        id: 146,
        title: "Middle of the Linked List",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/middle-of-the-linked-list/",
        topics: ["LinkedList", "Two Pointers"],
        focus: "Slow/fast runner logic.",
        hint: "Advance slow pointer by 1 step, fast by 2. When fast reaches end, slow is at the middle."
    },
    {
        id: 147,
        title: "Palindrome Linked List",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/palindrome-linked-list/",
        topics: ["LinkedList", "Two Pointers"],
        focus: "Reverse second half comparison check.",
        hint: "Find middle, reverse second half. Compare values from head and reversed start node by node."
    },
    {
        id: 148,
        title: "Intersection of Two Linked Lists",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/intersection-of-two-linked-lists/",
        topics: ["LinkedList", "Two Pointers"],
        focus: "Equalizing path lengths via swapping heads.",
        hint: "Point pointer A and B to heads. If pointer reaches end, swap to other list's head. They meet at intersection."
    },
    {
        id: 149,
        title: "Odd Even Linked List",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/odd-even-linked-list/",
        topics: ["LinkedList"],
        focus: "Splitting and splicing two lists.",
        hint: "Group odd nodes and even nodes separately. Attach even list to the end of odd list."
    },
    {
        id: 150,
        title: "Copy List with Random Pointer",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/copy-list-with-random-pointer/",
        topics: ["LinkedList", "HashMap"],
        focus: "Iterative copying with pointers or map tracking.",
        hint: "Duplicate nodes in-place (interleave copy nodes). Set random pointers, then split list back into original and copy."
    },
    {
        id: 151,
        title: "Add Two Numbers",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/add-two-numbers/",
        topics: ["LinkedList", "Math"],
        focus: "Math addition with carry tracking.",
        hint: "Iterate lists. Add node values plus carry. Create new node with sum % 10, shift carry = sum / 10."
    },
    {
        id: 152,
        title: "Add Two Numbers II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/add-two-numbers-ii/",
        topics: ["LinkedList", "Stack"],
        focus: "Using stack to reverse addition direction.",
        hint: "Push values of both lists to two stacks. Pop and add digit values, creating output node in reverse order."
    },
    {
        id: 153,
        title: "Remove Linked List Elements",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/remove-linked-list-elements/",
        topics: ["LinkedList"],
        focus: "Filtering list node references.",
        hint: "Use dummy node. Set prev pointer, updating prev.next to skip nodes matching target val."
    },
    {
        id: 154,
        title: "Delete Node in a Linked List",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/delete-node-in-a-linked-list/",
        topics: ["LinkedList"],
        focus: "Copy next node data to current node.",
        hint: "Copy next node value to current node: node.val = node.next.val. Update node.next = node.next.next."
    },
    {
        id: 155,
        title: "Remove Duplicates from Sorted List",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/remove-duplicates-from-sorted-list/",
        topics: ["LinkedList"],
        focus: "Skipping consecutive matching node pointers.",
        hint: "If curr.val == curr.next.val, skip next node (curr.next = curr.next.next). Otherwise, advance curr pointer."
    },
    {
        id: 156,
        title: "Remove Duplicates from Sorted List II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/",
        topics: ["LinkedList"],
        focus: "Complete elimination of duplicate values.",
        hint: "Use dummy node. Track duplicate values. Skip all matching values until a unique value node is reached."
    },
    {
        id: 157,
        title: "Rotate List",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/rotate-list/",
        topics: ["LinkedList"],
        focus: "Splicing circular nodes.",
        hint: "Calculate length. Connect tail to head to form loop. Traverse to new tail index: (length - k % length), cut loop."
    },
    {
        id: 158,
        title: "Partition List",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/partition-list/",
        topics: ["LinkedList"],
        focus: "Dual dummy nodes building.",
        hint: "Create two separate lists: less-than x and greater-or-equal x. Merge lists sequentially."
    },
    {
        id: 159,
        title: "Swap Nodes in Pairs",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/swap-nodes-in-pairs/",
        topics: ["LinkedList"],
        focus: "Reference swap pointer loops.",
        hint: "Use dummy node. Adjust node pointers (first, second) dynamically, shifting pointer by 2 steps."
    },
    {
        id: 160,
        title: "Reverse Nodes in k-Group",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/reverse-nodes-in-k-group/",
        topics: ["LinkedList"],
        focus: "Group reversal pointer manipulation.",
        hint: "Verify k nodes exist. Reverse subgroup. Connect tail to recursively reversed next group."
    },

    // ----------------------------------------------------
    // MODULE 8: Stack & Queue (161 - 180)
    // ----------------------------------------------------
    {
        id: 161,
        title: "Valid Parentheses",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/valid-parentheses/",
        topics: ["Stack"],
        focus: "Use Deque (ArrayDeque) as Stack.",
        hint: "Push expected closing brackets when opening is seen. Pop and verify characters match on closing."
    },
    {
        id: 162,
        title: "Min Stack",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/min-stack/",
        topics: ["Stack"],
        focus: "Dual stacks or single stack with tracking node objects.",
        hint: "Maintain second stack containing minimum values, or push difference metrics/objects carrying current min value."
    },
    {
        id: 163,
        title: "Evaluate Reverse Polish Notation",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/evaluate-reverse-polish-notation/",
        topics: ["Stack"],
        focus: "String parser operations.",
        hint: "Push numbers onto Stack. On operator, pop two numbers, execute arithmetic operation, and push result back."
    },
    {
        id: 164,
        title: "Implement Queue using Stacks",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/implement-queue-using-stacks/",
        topics: ["Stack"],
        focus: "Dual stack operations (input/output buffer stacks).",
        hint: "Push to input stack. On pop/peek, transfer elements to output stack if empty, yielding FIFO order."
    },
    {
        id: 165,
        title: "Implement Stack using Queues",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/implement-stack-using-queues/",
        topics: ["Queue"],
        focus: "Circular element rotation in Queue.",
        hint: "Push element to queue. Shift all existing queue elements to the back of the queue (loop size - 1)."
    },
    {
        id: 166,
        title: "Daily Temperatures",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/daily-temperatures/",
        topics: ["Stack"],
        focus: "Monotonic Decreasing Stack storing indices.",
        hint: "Push indices onto stack. If current temp > temp at stack top index, pop and calculate index difference."
    },
    {
        id: 167,
        title: "Next Greater Element I",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/next-greater-element-i/",
        topics: ["Stack", "HashMap"],
        focus: "Monotonic stack with HashMap lookup index.",
        hint: "Run monotonic stack over nums2. Map each number to its next greater element. Query map for nums1 elements."
    },
    {
        id: 168,
        title: "Next Greater Element II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/next-greater-element-ii/",
        topics: ["Stack"],
        focus: "Circular traversal of arrays.",
        hint: "Traverse array twice (0 to 2*n - 1) using modulo operator. Maintain monotonic stack of indices."
    },
    {
        id: 169,
        title: "Simplify Path",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/simplify-path/",
        topics: ["Stack"],
        focus: "String split parsing.",
        hint: "Split path by '/'. Push components onto stack. Pop for '..', skip '.' or empty components."
    },
    {
        id: 170,
        title: "Asteroid Collision",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/asteroid-collision/",
        topics: ["Stack"],
        focus: "Tracking direction states.",
        hint: "Push positive values. On negative values, pop and collide while positive stack top size is smaller."
    },
    {
        id: 171,
        title: "Online Stock Span",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/online-stock-span/",
        topics: ["Stack"],
        focus: "Pairs tracking (price, accumulated weight).",
        hint: "Use stack of price/span pairs. Pop elements with price <= current price, accumulating span widths."
    },
    {
        id: 172,
        title: "Sliding Window Maximum",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/sliding-window-maximum/",
        topics: ["Queue", "Sliding Window"],
        focus: "Monotonic Queue index mapping.",
        hint: "Maintain Deque containing indices of values in descending order. Retrieve maximum from first element."
    },
    {
        id: 173,
        title: "Decode String",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/decode-string/",
        topics: ["Stack"],
        focus: "Dual stack usage (numbers stack & string builders stack).",
        hint: "On digit, build number. On '[', push number and current string. On ']', pop and repeat current string."
    },
    {
        id: 174,
        title: "Target Sum",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/target-sum/",
        topics: ["Stack", "Dynamic Programming"],
        focus: "Recursive recursion or stack simulations.",
        hint: "Transform to subset sum partition. Solve using dynamic programming or memoized DFS recursion."
    },
    {
        id: 175,
        title: "Basic Calculator",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/basic-calculator/",
        topics: ["Stack"],
        focus: "Sign and result tracking inside brackets.",
        hint: "Store running result and sign. On '(', push result and sign onto stack, reset. On ')', pop and evaluate."
    },
    {
        id: 176,
        title: "Basic Calculator II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/basic-calculator-ii/",
        topics: ["Stack"],
        focus: "Order of operations evaluation without recursion.",
        hint: "Maintain running number and last sign. Push multiplication/division results directly, sum stack at end."
    },
    {
        id: 177,
        title: "Remove K Digits",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/remove-k-digits/",
        topics: ["Stack"],
        focus: "Monotonic increasing stack representation.",
        hint: "Keep digits increasing. Pop larger digits from stack on lower inputs. Remove zeros from head."
    },
    {
        id: 178,
        title: "132 Pattern",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/132-pattern/",
        topics: ["Stack"],
        focus: "Monotonic decreasing stack for '2' candidate values.",
        hint: "Traverse array from right. Maintain '3' (stack elements) and '2' (popped elements value) verifying bounds."
    },
    {
        id: 179,
        title: "Validate Stack Sequences",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/validate-stack-sequences/",
        topics: ["Stack"],
        focus: "Simulation using a stack wrapper.",
        hint: "Push elements from pushed array. Pop as long as stack top matches popped pointer element."
    },
    {
        id: 180,
        title: "Removing Stars From a String",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/removing-stars-from-a-string/",
        topics: ["Stack"],
        focus: "Using StringBuilder as stack simulation.",
        hint: "Append character to StringBuilder. If character is '*', remove the last character of the StringBuilder."
    },

    // ----------------------------------------------------
    // MODULE 9: Heap & Priority Queue (181 - 195)
    // ----------------------------------------------------
    {
        id: 181,
        title: "Kth Largest Element in an Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/kth-largest-element-in-an-array/",
        topics: ["Heap"],
        focus: "Min-Heap size control logic.",
        hint: "Use PriorityQueue as min-heap. Add elements to heap, if heap size exceeds k, poll the smallest."
    },
    {
        id: 182,
        title: "Merge k Sorted Lists",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/merge-k-sorted-lists/",
        topics: ["Heap", "LinkedList"],
        focus: "Custom PriorityQueue sorting node values.",
        hint: "Add head of all lists to min-heap. Poll minimum node, attach to result, insert next node of polled index."
    },
    {
        id: 183,
        title: "Top K Frequent Elements",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/top-k-frequent-elements/",
        topics: ["Heap", "HashMap"],
        focus: "Sorting hash frequencies with PriorityQueue.",
        hint: "Count frequencies in map. Push keys onto min-heap sorted by frequency. Keep heap size <= k."
    },
    {
        id: 184,
        title: "Find Median from Data Stream",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/find-median-from-data-stream/",
        topics: ["Heap"],
        focus: "Balancing two heaps (Max-Heap & Min-Heap).",
        hint: "Store lower half of numbers in max-heap, upper half in min-heap. Balance sizes so difference is <= 1."
    },
    {
        id: 185,
        title: "K Closest Points to Origin",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/k-closest-points-to-origin/",
        topics: ["Heap"],
        focus: "Max-Heap custom comparator calculations.",
        hint: "Store coordinates in max-heap sorted by distance. Pop furthest points when heap size exceeds k."
    },
    {
        id: 186,
        title: "Task Scheduler",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/task-scheduler/",
        topics: ["Heap", "HashMap"],
        focus: "PriorityQueue scheduling loops.",
        hint: "Add tasks sorted by frequency to max-heap. Process in blocks of size n+1. Use queue to track task cooling."
    },
    {
        id: 187,
        title: "Kth Largest Element in a Stream",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/kth-largest-element-in-a-stream/",
        topics: ["Heap"],
        focus: "PriorityQueue size maintenance.",
        hint: "Initialize min-heap of size k. On add, insert item and pop smallest if size exceeds k."
    },
    {
        id: 188,
        title: "Reorganize String",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/reorganize-string/",
        topics: ["Heap", "HashMap"],
        focus: "Pair tracking to prevent self-collision.",
        hint: "Store character counts in max-heap. Extract highest count char. Keep it blocked until next char is placed."
    },
    {
        id: 189,
        title: "Last Stone Weight",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/last-stone-weight/",
        topics: ["Heap"],
        focus: "Max-Heap extraction loop.",
        hint: "Push all stone weights into max-heap. Pop two largest stones, smash them, and insert difference back."
    },
    {
        id: 190,
        title: "Top K Frequent Words",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/top-k-frequent-words/",
        topics: ["Heap", "HashMap"],
        focus: "Complex comparator sorting (freq descending, alphabetical ascending).",
        hint: "Use PriorityQueue with custom comparator. Track word counts using map. Maintain size k."
    },
    {
        id: 191,
        title: "Find K Pairs with Smallest Sums",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-k-pairs-with-smallest-sums/",
        topics: ["Heap"],
        focus: "Index tracking optimization to avoid duplicate inserts.",
        hint: "Push (nums1[i] + nums2[0], i, 0) pairs into min-heap. Poll min, then insert next index pair (i, j + 1)."
    },
    {
        id: 192,
        title: "Course Schedule III",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/course-schedule-iii/",
        topics: ["Heap", "Greedy"],
        focus: "Replace max duration course checks.",
        hint: "Sort courses by deadline. Traverse courses. If course fits, add duration to heap. Else, swap with largest heap item."
    },
    {
        id: 193,
        title: "Smallest Range Covering Elements from K Lists",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/",
        topics: ["Heap"],
        focus: "Dynamic pointers tracking in min-heap.",
        hint: "Add head of all lists to min-heap. Track max value seen. Poll min, update range, push next item from list."
    },
    {
        id: 194,
        title: "Maximum Subarray Sum After One Operation",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-subarray-sum-after-one-operation/",
        topics: ["Heap", "Dynamic Programming"],
        focus: "DP state maintenance (squared vs normal sum).",
        hint: "At index i, track max sum without square operation and max sum with one square operation applied."
    },
    {
        id: 195,
        title: "Swim in Rising Water",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/swim-in-rising-water/",
        topics: ["Heap", "Graph"],
        focus: "Dijkstra's search using PriorityQueue.",
        hint: "Run Dijkstra-like BFS. Queue stores cells sorted by height. Track maximum height along path."
    },

    // ----------------------------------------------------
    // MODULE 10: Recursion & Backtracking (196 - 215)
    // ----------------------------------------------------
    {
        id: 196,
        title: "Subsets",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/subsets/",
        topics: ["Backtracking"],
        focus: "Adding subsets index options.",
        hint: "At each step, add current list clone to result. Branch by deciding whether to include element."
    },
    {
        id: 197,
        title: "Subsets II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/subsets-ii/",
        topics: ["Backtracking"],
        focus: "Skipping duplicate element indexes.",
        hint: "Sort the array. Skip duplicate adjacent elements in the backtracking loop: if (i > start && nums[i] == nums[i-1]) continue."
    },
    {
        id: 198,
        title: "Permutations",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/permutations/",
        topics: ["Backtracking"],
        focus: "Using boolean visited array marker.",
        hint: "Loop over elements. If visited[i] is false, mark visited, add to current list, recurse, then backtrack."
    },
    {
        id: 199,
        title: "Permutations II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/permutations-ii/",
        topics: ["Backtracking"],
        focus: "Sort and handle duplicated visited condition indices.",
        hint: "Sort elements. Skip element if visited, or if duplicate of previous and previous is unvisited."
    },
    {
        id: 200,
        title: "Combinations",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/combinations/",
        topics: ["Backtracking"],
        focus: "Base case size tracking.",
        hint: "Recurse from index to n. Add to path, recurse, backtrack. Stop when path size = k."
    },
    {
        id: 201,
        title: "Combination Sum",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/combination-sum/",
        topics: ["Backtracking"],
        focus: "Reusing same index parameters.",
        hint: "Backtrack, decreasing target. Allow index reuse in recursive call, return when target is negative."
    },
    {
        id: 202,
        title: "Combination Sum II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/combination-sum-ii/",
        topics: ["Backtracking"],
        focus: "Skip duplicates in target calculations.",
        hint: "Sort array. Increment index in recursion to prevent reuse. Skip duplicate values in backtrack loop."
    },
    {
        id: 203,
        title: "Combination Sum III",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/combination-sum-iii/",
        topics: ["Backtracking"],
        focus: "Size constraint (k elements summing to n).",
        hint: "Recurse through digits 1 to 9. Deduct value from target sum. Backtrack if sum becomes negative."
    },
    {
        id: 204,
        title: "N-Queens",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/n-queens/",
        topics: ["Backtracking"],
        focus: "Row/col/diagonal hashing indices.",
        hint: "Track column indices and diagonal hashes: (row - col) and (row + col) to find attacking configurations."
    },
    {
        id: 205,
        title: "N-Queens II",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/n-queens-ii/",
        topics: ["Backtracking"],
        focus: "Boolean array check speeds.",
        hint: "Place queens row-by-row. Maintain boolean trackers for cols and diagonals. Return total count."
    },
    {
        id: 206,
        title: "Word Search",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/word-search/",
        topics: ["Backtracking", "Matrix"],
        focus: "In-place grid letter changes (backtrack characters).",
        hint: "Run DFS search from each cell. Replace board character with '#' to mark visited, restoring it afterwards."
    },
    {
        id: 207,
        title: "Sudoku Solver",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/sudoku-solver/",
        topics: ["Backtracking"],
        focus: "Matrix cell checks (row, col, 3x3 block).",
        hint: "Find empty cell. Try digits '1'-'9'. Verify placement matches rules, backtrack if board is unsolvable."
    },
    {
        id: 208,
        title: "Generate Parentheses",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/generate-parentheses/",
        topics: ["Backtracking"],
        focus: "Tracking left/right count balance.",
        hint: "Add '(' if open < n. Add ')' if close < open. Stop when string length reaches 2*n."
    },
    {
        id: 209,
        title: "Letter Combinations of a Phone Number",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/letter-combinations-of-a-phone-number/",
        topics: ["Backtracking"],
        focus: "Digit lookup string mappings.",
        hint: "Build recursion map from digit to letters. Branch for each letter choice associated with index char."
    },
    {
        id: 210,
        title: "Palindrome Partitioning",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/palindrome-partitioning/",
        topics: ["Backtracking"],
        focus: "Substring palindrome verification.",
        hint: "At index, check prefix substrings. If palindrome, add to list and recurse on remainder."
    },
    {
        id: 211,
        title: "Restore IP Addresses",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/restore-ip-addresses/",
        topics: ["Backtracking"],
        focus: "Validation of segment value range (0-255).",
        hint: "Branch out by selecting segment sizes of 1, 2, or 3 digits. Avoid values with leading zeros."
    },
    {
        id: 212,
        title: "Word Search II",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/word-search-ii/",
        topics: ["Backtracking", "Trie"],
        focus: "Optimizing matrix search using prefix Trie.",
        hint: "Insert target word list into Trie. Search board with DFS, pruning paths early if prefix is not in Trie."
    },
    {
        id: 213,
        title: "Path Sum II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/path-sum-ii/",
        topics: ["Backtracking", "Tree"],
        focus: "Binary tree recursion backtracking list node path.",
        hint: "Add node to path, check if leaf node sum equals target. Recurse, then remove node from path."
    },
    {
        id: 214,
        title: "Target Sum",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/target-sum/",
        topics: ["Backtracking", "Dynamic Programming"],
        focus: "Recursion memoization checks.",
        hint: "Represent choices as add/subtract branches. Memoize results using String map key: 'index_sum'."
    },
    {
        id: 215,
        title: "Combination Sum III",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/combination-sum-iii/",
        topics: ["Backtracking"],
        focus: "Unique numbers boundary filters.",
        hint: "Recurse numbers from start to 9. If size = k and target = 0, add copy to result list."
    },

    // ----------------------------------------------------
    // MODULE 11: Binary Trees & BST (216 - 245)
    // ----------------------------------------------------
    {
        id: 216,
        title: "Maximum Depth of Binary Tree",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
        topics: ["Trees"],
        focus: "Simple post-order tree height traversal.",
        hint: "Depth is 1 + max(depth(left), depth(right)). Return 0 when node is null."
    },
    {
        id: 217,
        title: "Same Tree",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/same-tree/",
        topics: ["Trees"],
        focus: "Structural check checks.",
        hint: "Nodes are same if values match, and left subtrees are same, and right subtrees are same."
    },
    {
        id: 218,
        title: "Symmetric Tree",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/symmetric-tree/",
        topics: ["Trees"],
        focus: "Mirror verification recursion parameters.",
        hint: "Compare node1.left with node2.right and node1.right with node2.left recursively."
    },
    {
        id: 219,
        title: "Invert Binary Tree",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/invert-binary-tree/",
        topics: ["Trees"],
        focus: "Swapping child node pointers.",
        hint: "Swap node.left and node.right recursively for all tree nodes."
    },
    {
        id: 220,
        title: "Path Sum",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/path-sum/",
        topics: ["Trees"],
        focus: "Target sum subtraction recursion.",
        hint: "Subtract value from target. Check if current leaf node value matches target sum."
    },
    {
        id: 221,
        title: "Path Sum II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/path-sum-ii/",
        topics: ["Trees", "Backtracking"],
        focus: "Node path backtracking list updates.",
        hint: "Keep track of active paths. Add node, recurse. Backtrack by popping last item from path list."
    },
    {
        id: 222,
        title: "Binary Tree Level Order Traversal",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/binary-tree-level-order-traversal/",
        topics: ["Trees", "Queue"],
        focus: "Queue level size markers.",
        hint: "Use Queue (FIFO) for BFS. Iterate queue size in nested loop to group nodes by level."
    },
    {
        id: 223,
        title: "Validate Binary Search Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/validate-binary-search-tree/",
        topics: ["Trees"],
        focus: "Upper and lower boundary checks.",
        hint: "Pass min/max boundaries recursively. Node value must be strictly within boundaries."
    },
    {
        id: 224,
        title: "Insert into a Binary Search Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/insert-into-a-binary-search-tree/",
        topics: ["Trees"],
        focus: "BST traversal comparisons.",
        hint: "Compare node.val. Recurse left if value < root, right if value > root. Insert at empty leaf position."
    },
    {
        id: 225,
        title: "Delete Node in a BST",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/delete-node-in-a-bst/",
        topics: ["Trees"],
        focus: "LCA sub-node traversal logic.",
        hint: "Find node. Swap with min value node of right subtree (inorder successor) or max of left subtree, delete node."
    },
    {
        id: 226,
        title: "Lowest Common Ancestor of a BST",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/",
        topics: ["Trees"],
        focus: "LCA BST comparisons.",
        hint: "If both values are smaller than root, recurse left. If both larger, recurse right. Else, root is LCA."
    },
    {
        id: 227,
        title: "Lowest Common Ancestor of a Binary Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/",
        topics: ["Trees"],
        focus: "Post-order LCA checks.",
        hint: "Recurse left/right. If node matches p or q, return node. If both sub-searches return values, root is LCA."
    },
    {
        id: 228,
        title: "Serialize and Deserialize Binary Tree",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/",
        topics: ["Trees", "Queue"],
        focus: "String parser algorithms.",
        hint: "Serialize using level order queue. Deserialize using pointer token lists or recursion lists."
    },
    {
        id: 229,
        title: "Binary Tree Zigzag Level Order Traversal",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/",
        topics: ["Trees", "Queue"],
        focus: "Alternative level list builders.",
        hint: "Run BFS level order traversal. If level count is odd, append nodes in reverse using LinkedList.addFirst."
    },
    {
        id: 230,
        title: "Balanced Binary Tree",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/balanced-binary-tree/",
        topics: ["Trees"],
        focus: "Depth difference check recursively.",
        hint: "Calculate height. Return -1 early if left/right subtrees are unbalanced or height gap > 1."
    },
    {
        id: 231,
        title: "Minimum Depth of Binary Tree",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/minimum-depth-of-binary-tree/",
        topics: ["Trees"],
        focus: "Handling null children node paths.",
        hint: "If left node is null, recurse right height. If right null, recurse left height. Else return 1 + min(left, right)."
    },
    {
        id: 232,
        title: "Binary Tree Paths",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/binary-tree-paths/",
        topics: ["Trees", "Backtracking"],
        focus: "Recursion string path updates.",
        hint: "Build path strings recursively using StringBuilder. Add path to results list when reaching leaf node."
    },
    {
        id: 233,
        title: "Sum of Left Leaves",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/sum-of-left-leaves/",
        topics: ["Trees"],
        focus: "Flag trackers.",
        hint: "Traverse tree recursively. Add leaf node value only when left-child flag evaluates to true."
    },
    {
        id: 234,
        title: "Construct Binary Tree from Preorder and Inorder Traversal",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/",
        topics: ["Trees", "HashMap"],
        focus: "Using HashMap to locate pivot points.",
        hint: "Map inorder indexes. Preorder first index is root. Locate root in inorder, split left/right subtrees."
    },
    {
        id: 235,
        title: "Construct Binary Tree from Inorder and Postorder Traversal",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/",
        topics: ["Trees", "HashMap"],
        focus: "Boundary variables calculation.",
        hint: "Map inorder elements. Postorder last index is root. Track ranges to build child subtrees recursively."
    },
    {
        id: 236,
        title: "Binary Tree Level Order Traversal II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/binary-tree-level-order-traversal-ii/",
        topics: ["Trees", "Queue"],
        focus: "Adding level lists to head of result list.",
        hint: "Perform level-order BFS. Insert level element sublists to the beginning of the result list (LinkedList)."
    },
    {
        id: 237,
        title: "Binary Tree Right Side View",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/binary-tree-right-side-view/",
        topics: ["Trees", "Queue"],
        focus: "DFS or BFS node selection checks.",
        hint: "BFS: Add last node of each level queue to result. DFS: Recurse right first, add node when depth matches list size."
    },
    {
        id: 238,
        title: "Flatten Binary Tree to Linked List",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/flatten-binary-tree-to-linked-list/",
        topics: ["Trees"],
        focus: "Post-order traversal updates.",
        hint: "Reverse post-order traversal (right-left-root). Set node.right to previous node, node.left to null."
    },
    {
        id: 239,
        title: "Populating Next Right Pointers in Each Node",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/populating-next-right-pointers-in-each-node/",
        topics: ["Trees"],
        focus: "Linked list style pointer connections.",
        hint: "Connect left.next = right. Connect right.next = parent.next.left recursively."
    },
    {
        id: 240,
        title: "Populating Next Right Pointers in Each Node II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/",
        topics: ["Trees"],
        focus: "Using level-order node tracking.",
        hint: "Maintain level pointer connections using dummy nodes to track next levels without queue storage."
    },
    {
        id: 241,
        title: "Convert Sorted Array to Binary Search Tree",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/",
        topics: ["Trees"],
        focus: "Binary midpoint recursion.",
        hint: "Choose midpoint of array as root to guarantee balancing. Recurse on left and right halves."
    },
    {
        id: 242,
        title: "Kth Smallest Element in a BST",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/kth-smallest-element-in-a-bst/",
        topics: ["Trees"],
        focus: "In-order traversal sequence.",
        hint: "Traverse BST in-order. Decrement k at each visited node. Return root value when k = 0."
    },
    {
        id: 243,
        title: "Binary Search Tree Iterator",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/binary-search-tree-iterator/",
        topics: ["Trees", "Stack"],
        focus: "Simulating recursion using stack.",
        hint: "Push current node and all its left descendants onto stack. Pop node to return next, then process its right subtree."
    },
    {
        id: 244,
        title: "Sum Root to Leaf Numbers",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/sum-root-to-leaf-numbers/",
        topics: ["Trees"],
        focus: "Running arithmetic checks.",
        hint: "Accumulate values recursively (sum * 10 + val). Add path value to global total at leaf nodes."
    },
    {
        id: 245,
        title: "Binary Tree Maximum Path Sum",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/binary-tree-maximum-path-sum/",
        topics: ["Trees"],
        focus: "Recursive height sums with global max tracking.",
        hint: "Calculate max branch sums. Update global max path sum by adding left and right branches to root."
    },

    // ----------------------------------------------------
    // MODULE 12: Graphs & DSU (246 - 275)
    // ----------------------------------------------------
    {
        id: 246,
        title: "Number of Islands",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/number-of-islands/",
        topics: ["Graphs", "DFS"],
        focus: "Standard 2D matrix search.",
        hint: "Iterate cells. When '1' is found, increment island count and run DFS/BFS to turn all connected '1's to '0'."
    },
    {
        id: 247,
        title: "Max Area of Island",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/max-area-of-island/",
        topics: ["Graphs", "DFS"],
        focus: "Summing adjacent node count.",
        hint: "Traverse matrix. Run DFS on land cells, return size as 1 + sum of DFS on all 4 directions. Track max size."
    },
    {
        id: 248,
        title: "Clone Graph",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/clone-graph/",
        topics: ["Graphs", "HashMap"],
        focus: "Using HashMap to map original nodes to clones.",
        hint: "Run DFS or BFS traversal. Build copy nodes, storing mappings. Loop to connect clone neighbor lists."
    },
    {
        id: 249,
        title: "Course Schedule",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/course-schedule/",
        topics: ["Graphs", "Topological Sort"],
        focus: "Kahn's Algorithm (indegree queue) or cycle DFS.",
        hint: "Calculate in-degrees. Add 0 in-degree nodes to queue. Decrement child in-degrees, queueing matches."
    },
    {
        id: 250,
        title: "Course Schedule II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/course-schedule-ii/",
        topics: ["Graphs", "Topological Sort"],
        focus: "Storing topological node order.",
        hint: "Run Kahn's algorithm. Store order sequence in result array. If visited nodes size < n, return empty array."
    },
    {
        id: 251,
        title: "Pacific Atlantic Water Flow",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/pacific-atlantic-water-flow/",
        topics: ["Graphs", "DFS"],
        focus: "Search starting from ocean boundaries.",
        hint: "Run DFS starting from Pacific boundary cells, then from Atlantic cells. Find cells visited by both runs."
    },
    {
        id: 252,
        title: "Number of Provinces",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/number-of-provinces/",
        topics: ["Graphs", "Union-Find"],
        focus: "Standard Union-Find or DFS components.",
        hint: "Scan nodes. Track visited array. Trigger DFS components to trace connections, incrementing count."
    },
    {
        id: 253,
        title: "Redundant Connection",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/redundant-connection/",
        topics: ["Graphs", "Union-Find"],
        focus: "Union-Find DSU detection.",
        hint: "Initialize DSU parents. For each edge, find roots. If roots match, cycle is detected; return edge."
    },
    {
        id: 254,
        title: "Word Ladder",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/word-ladder/",
        topics: ["Graphs", "BFS"],
        focus: "Shortest path BFS inside a Set list.",
        hint: "Treat dictionary words as graph nodes. Run BFS level-by-level, altering letters to find adjacent word links."
    },
    {
        id: 255,
        title: "Network Delay Time",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/network-delay-time/",
        topics: ["Graphs", "Heap"],
        focus: "Dijkstra's Shortest Path Algorithm.",
        hint: "Store shortest path in arrays. PriorityQueue tracks min delay pairs. Select largest min-delay value."
    },
    {
        id: 256,
        title: "Reconstruct Itinerary",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/reconstruct-itinerary/",
        topics: ["Graphs", "DFS"],
        focus: "Hierholzer's Algorithm (Eulerian path).",
        hint: "Build graph with PriorityQueue adjacency list. Run DFS, pop ticket nodes, add destination to list start."
    },
    {
        id: 257,
        title: "Min Cost to Connect All Points",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/min-cost-to-connect-all-points/",
        topics: ["Graphs", "Union-Find"],
        focus: "Kruskal's or Prim's MST Algorithms.",
        hint: "Build edge list containing Manhattan distances. Sort edges. Apply DSU logic to build Minimum Spanning Tree."
    },
    {
        id: 258,
        title: "Rotting Oranges",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/rotting-oranges/",
        topics: ["Graphs", "BFS"],
        focus: "Multi-source BFS queue tracking.",
        hint: "Enqueue all rotten cell indices. Run BFS to rot neighboring oranges, tracking minutes elapsed."
    },
    {
        id: 259,
        title: "Flood Fill",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/flood-fill/",
        topics: ["Graphs", "DFS"],
        focus: "Grid DFS recursive updates.",
        hint: "If oldColor matches target color, return grid. Recursively color adjacent cells matching oldColor."
    },
    {
        id: 260,
        title: "Island Perimeter",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/island-perimeter/",
        topics: ["Graphs"],
        focus: "Linear boundary checks.",
        hint: "For each island cell, add 4 sides. Subtract 2 sides for each adjacent land neighbor check."
    },
    {
        id: 261,
        title: "Employee Importance",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/employee-importance/",
        topics: ["Graphs", "HashMap"],
        focus: "DFS graph search with parent-child maps.",
        hint: "Map employee IDs to Employee objects. Run recursive DFS to sum importance values of self and subordinates."
    },
    {
        id: 262,
        title: "Keys and Rooms",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/keys-and-rooms/",
        topics: ["Graphs", "DFS"],
        focus: "DFS reachability verification.",
        hint: "Track rooms visited. DFS through keys found in visited rooms. Verify size equals total room count."
    },
    {
        id: 263,
        title: "All Paths From Source to Target",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/all-paths-from-source-to-target/",
        topics: ["Graphs", "Backtracking"],
        focus: "DFS path tracking.",
        hint: "Run DFS starting from index 0. Append nodes to path, and add to results when target node n-1 is reached."
    },
    {
        id: 264,
        title: "Find Eventual Safe States",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-eventual-safe-states/",
        topics: ["Graphs", "DFS"],
        focus: "Cycle detection algorithm using state flags.",
        hint: "Use state tags (0=unvisited, 1=visiting, 2=safe). If cycle is detected during DFS, node is unsafe."
    },
    {
        id: 265,
        title: "Is Graph Bipartite?",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/is-graph-bipartite/",
        topics: ["Graphs", "DFS"],
        focus: "2-coloring graph nodes.",
        hint: "Try coloring nodes dynamically (0/1). If adjacent nodes share same color parameter, graph is not bipartite."
    },
    {
        id: 266,
        title: "Shortest Path in Binary Matrix",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/shortest-path-in-binary-matrix/",
        topics: ["Graphs", "BFS"],
        focus: "8-directional shortest path BFS.",
        hint: "BFS queue search. Enqueue coordinates, updating cell path distance. Return steps when reaching end."
    },
    {
        id: 267,
        title: "As Far from Land as Possible",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/as-far-from-land-as-possible/",
        topics: ["Graphs", "BFS"],
        focus: "Multi-source BFS from land cells.",
        hint: "Queue land cells. BFS updates adjacent water cell distances, returning last max distance."
    },
    {
        id: 268,
        title: "Minimum Number of Vertices to Reach All Nodes",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-number-of-vertices-to-reach-all-nodes/",
        topics: ["Graphs"],
        focus: "Identify nodes with 0 in-degree.",
        hint: "Calculate in-degrees. Only nodes with an in-degree of 0 are required in output vertices."
    },
    {
        id: 269,
        title: "Number of Operations to Make Network Connected",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/number-of-operations-to-make-network-connected/",
        topics: ["Graphs", "Union-Find"],
        focus: "Redundant edge vs components balance count.",
        hint: "Verify edges count >= n-1. Use DSU to count components. Minimum operations required is components - 1."
    },
    {
        id: 270,
        title: "Find the City with the Smallest Number of Neighbors at a Threshold Distance",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/",
        topics: ["Graphs"],
        focus: "Floyd-Warshall all-pairs shortest paths.",
        hint: "Calculate distance matrices using Floyd-Warshall. Count reachable cities under threshold for each source."
    },
    {
        id: 271,
        title: "Path with Maximum Probability",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/path-with-maximum-probability/",
        topics: ["Graphs", "Heap"],
        focus: "Modified Dijkstra sorting maximum probability.",
        hint: "Use PriorityQueue to fetch max probabilities. Update path probabilities using multiplication."
    },
    {
        id: 272,
        title: "Cheapest Flights Within K Stops",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/cheapest-flights-within-k-stops/",
        topics: ["Graphs"],
        focus: "Bellman-Ford or BFS level updates.",
        hint: "Run Bellman-Ford up to k+1 iterations, maintaining distance array clones to avoid updates from same step."
    },
    {
        id: 273,
        title: "Accounts Merge",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/accounts-merge/",
        topics: ["Graphs", "Union-Find"],
        focus: "Union email indices under account nodes.",
        hint: "Map emails to IDs. DSU merges connected emails. Group emails by parent root, sort, mapping back to name."
    },
    {
        id: 274,
        title: "Satisfiability of Equality Equations",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/satisfiability-of-equality-equations/",
        topics: ["Graphs", "Union-Find"],
        focus: "DSU check on inequalities.",
        hint: "Union letters matching '==' conditions. Scan relations matching '!=' and verify roots are different."
    },
    {
        id: 275,
        title: "Critical Connections in a Network",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/critical-connections-in-a-network/",
        topics: ["Graphs"],
        focus: "Tarjan's Algorithm (bridges check).",
        hint: "Maintain DFS discovery levels and low links. Bridge exists if discovery rank at u < low link rank at v."
    },

    // ----------------------------------------------------
    // MODULE 13: Greedy & Bit Manipulation (276 - 290)
    // ----------------------------------------------------
    {
        id: 276,
        title: "Gas Station",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/gas-station/",
        topics: ["Greedy"],
        focus: "Linear total balance validation.",
        hint: "If total gas < total cost, return -1. Reset starting index when cumulative tank drops below 0."
    },
    {
        id: 277,
        title: "Jump Game",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/jump-game/",
        topics: ["Greedy"],
        focus: "Tracking maximum reachable boundary.",
        hint: "Iterate index i. If i > maxReach, return false. Update maxReach = max(maxReach, i + nums[i])."
    },
    {
        id: 278,
        title: "Jump Game II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/jump-game-ii/",
        topics: ["Greedy"],
        focus: "Calculating jumps on boundary step endpoints.",
        hint: "Maintain currentEnd, nextMaxReach and jumps count. Increment jumps when index reaches currentEnd."
    },
    {
        id: 279,
        title: "Assign Cookies",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/assign-cookies/",
        topics: ["Greedy", "Sorting"],
        focus: "Two pointer checks on sorted arrays.",
        hint: "Sort arrays. Map cookies to smallest children sizes sequentially using pointers."
    },
    {
        id: 280,
        title: "Hand of Straights",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/hand-of-straights/",
        topics: ["Greedy", "TreeMap"],
        focus: "Sorted frequency count updates.",
        hint: "Add counts to TreeMap. Poll smallest key, subtract counts of consecutive elements up to group size."
    },
    {
        id: 281,
        title: "Merge Intervals",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/merge-intervals/",
        topics: ["Greedy", "Sorting"],
        focus: "Sorting intervals by starting index.",
        hint: "Sort intervals. Merge with active interval if overlap occurs (start <= previous end), else output."
    },
    {
        id: 282,
        title: "Non-overlapping Intervals",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/non-overlapping-intervals/",
        topics: ["Greedy", "Sorting"],
        focus: "Sorting intervals by ending index.",
        hint: "Sort by ends. Select first ending interval, skip subsequent intervals if their start < current end."
    },
    {
        id: 283,
        title: "Single Number II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/single-number-ii/",
        topics: ["Bit Manipulation"],
        focus: "Summing bit columns modulo 3.",
        hint: "Sum bits at position i across all numbers. Bit of result is sum % 3. Reconstruct final integer."
    },
    {
        id: 284,
        title: "Number of 1 Bits",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/number-of-1-bits/",
        topics: ["Bit Manipulation"],
        focus: "Clear lowest set bit trick: n & (n - 1).",
        hint: "Run loop clearing lowest set bit n = n & (n-1) at each step, incrementing counter until n = 0."
    },
    {
        id: 285,
        title: "Counting Bits",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/counting-bits/",
        topics: ["Bit Manipulation", "Dynamic Programming"],
        focus: "DP relation using bitwise right shift.",
        hint: "Number of set bits is: dp[i] = dp[i >> 1] + (i & 1)."
    },
    {
        id: 286,
        title: "Reverse Bits",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/reverse-bits/",
        topics: ["Bit Manipulation"],
        focus: "Adding bits dynamically using shifts.",
        hint: "Extract lowest bit of input (n & 1), append to output shifting left, shift input right. Repeat 32 times."
    },
    {
        id: 287,
        title: "Sum of Two Integers",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/sum-of-two-integers/",
        topics: ["Bit Manipulation"],
        focus: "Simulating half adder gates.",
        hint: "Sum without carry is a ^ b. Carry is (a & b) << 1. Loop until carry becomes 0."
    },
    {
        id: 288,
        title: "Partition Labels",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/partition-labels/",
        topics: ["Greedy"],
        focus: "HashMap or array storing last index positions.",
        hint: "Store last occurrence of each char. Loop string, expanding boundary to match current char's last index."
    },
    {
        id: 289,
        title: "Task Scheduler",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/task-scheduler/",
        topics: ["Greedy"],
        focus: "Interval calculations based on max task counts.",
        hint: "Calculate space blocks required by most frequent task, checking if total slots > array length."
    },
    {
        id: 290,
        title: "Minimum Number of Arrows to Burst Balloons",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/",
        topics: ["Greedy", "Sorting"],
        focus: "Sorting by coordinates endpoints.",
        hint: "Sort intervals by end. Shoot arrow at end of active interval, skip balloons that start before arrow index."
    },

    // ----------------------------------------------------
    // MODULE 14: Dynamic Programming & Advanced (291 - 300)
    // ----------------------------------------------------
    {
        id: 291,
        title: "Climbing Stairs",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/climbing-stairs/",
        topics: ["Dynamic Programming"],
        focus: "Fibonacci sequence values.",
        hint: "dp[i] = dp[i - 1] + dp[i - 2]. Optimize space using two variables to track previous steps."
    },
    {
        id: 292,
        title: "Min Cost Climbing Stairs",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/min-cost-climbing-stairs/",
        topics: ["Dynamic Programming"],
        focus: "Climbing state transition minimization.",
        hint: "dp[i] = cost[i] + min(dp[i-1], dp[i-2]). Maintain two state variables to save space."
    },
    {
        id: 293,
        title: "House Robber",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/house-robber/",
        topics: ["Dynamic Programming"],
        focus: "Decision states (rob vs skip).",
        hint: "dp[i] = max(dp[i-1], dp[i-2] + nums[i]). Trace states using two variables to solve in O(1) space."
    },
    {
        id: 294,
        title: "House Robber II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/house-robber-ii/",
        topics: ["Dynamic Programming"],
        focus: "Circular house array splitting.",
        hint: "Solve House Robber I for two ranges: house 0 to n-2, and house 1 to n-1. Select maximum result."
    },
    {
        id: 295,
        title: "Longest Palindromic Substring",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/longest-palindromic-substring/",
        topics: ["Dynamic Programming"],
        focus: "Expand parameters centers checks.",
        hint: "DFS matching on expanding centers yields O(N^2) time and O(1) space."
    },
    {
        id: 296,
        title: "Palindromic Substrings",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/palindromic-substrings/",
        topics: ["Dynamic Programming"],
        focus: "Substrings expansions counts.",
        hint: "Count total palindromes by centering on each character (odd size) and gaps (even size) while matching."
    },
    {
        id: 297,
        title: "Decode Ways",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/decode-ways/",
        topics: ["Dynamic Programming"],
        focus: "Character check splits mapping.",
        hint: "dp[i] adds dp[i-1] if 1-digit code is valid, and dp[i-2] if 2-digit code is between 10 and 26."
    },
    {
        id: 298,
        title: "Coin Change",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/coin-change/",
        topics: ["Dynamic Programming"],
        focus: "1D min array tabulation.",
        hint: "For each coin, update: dp[i] = min(dp[i], 1 + dp[i - coin]) for amounts up to target value."
    },
    {
        id: 299,
        title: "Word Break",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/word-break/",
        topics: ["Dynamic Programming"],
        focus: "String prefix matching tabulation.",
        hint: "dp[i] is true if dp[j] is true and substring [j, i] matches a dictionary word. Initialize dp[0] = true."
    },
    {
        id: 300,
        title: "Longest Increasing Subsequence",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/longest-increasing-subsequence/",
        topics: ["Dynamic Programming", "Binary Search"],
        focus: "Tail array tracking using binary search.",
        hint: "Maintain active sub-list. Binary search position for each element. Replace/insert elements to keep list sorted."
    }
];
