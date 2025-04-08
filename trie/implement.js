var Trie = function (value = "") {
  this.value = value;
  this.isFullWord = false;
  this.children = new Map();

  this.getValue = () => this.value;

  this.getNextChild = (nextLetter) => this.children.get(nextLetter);
};

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let currNode = this;
  let i = 0;

  while (i <= word.length) {
    if (i === word.length) {
      currNode.isFullWord = true;
      return;
    }

    const nextLetter = word[i];

    let child = currNode.getNextChild(nextLetter);

    if (child) {
      currNode = child;
    } else {
      child = new Trie(nextLetter);
      currNode.children.set(nextLetter, child);
      currNode = child;
    }

    i++;
  }
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let currNode = this;
  let i = 0;

  while (i <= word.length) {
    if (i === word.length && currNode.isFullWord) return true;

    const child = currNode.getNextChild(word[i]);

    if (child) {
      currNode = child;
      i++;
      continue;
    }

    return false;
  }
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  let currNode = this;
  let i = 0;

  while (i <= prefix.length) {
    if (prefix.length === i) return true;

    const child = currNode.getNextChild(prefix[i]);

    if (child) {
      currNode = child;
      i++;
      continue;
    }

    return false;
  }
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

var obj = new Trie();
obj.insert("apple");
console.log(obj.search("apple"));
console.log(obj.search("app"));
console.log(obj.startsWith("app"));
obj.insert("app");
console.log(obj.search("app"));
