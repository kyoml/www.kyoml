define("ace/mode/kyoml_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"], function(require, exports, module) {
    "use strict";
    
    var oop = require("../lib/oop");
    var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;
    
    var kyomlHighlightRules = function() {
    
        this.$rules = {
            start: [{
                include: "#main"
            }],
            "#main": [{
                include: "#blocks"
            }, {
                include: "#directives"
            }, {
                include: "#comment"
            }, {
                include: "#punctuation"
            }, {
                include: "#illegal"
            }],
            "#data": [{
                token: "punctuation.definition.array.kyoml",
                regex: /\[/,
                push: [{
                    token: "punctuation.definition.array.kyoml",
                    regex: /\]/,
                    next: "pop"
                }, {
                    include: "#data"
                }, {
                    include: "#comment"
                }]
            }, {
                token: "punctuation.definition.map.kyoml",
                regex: /\{/,
                push: [{
                    token: "punctuation.definition.map.kyoml",
                    regex: /\}/,
                    next: "pop"
                }, {
                    include: "#map_key_value"
                }, {
                    include: "#comment"
                }]
            }, {
                token: "constant.numeric.kyoml",
                regex: /[-\x002b]?[\d.]+/
            }, {
                token: "constant.language.kyoml",
                regex: /true|false|yes|no/
            }, {
                include: "#strings"
            }, {
                include: "#directives"
            }, {
                include: "#punctuation"
            }],
            "#strings": [{
                token: "string.quoted.double.basic.block.kyoml",
                regex: /"/,
                push: [{
                    token: "string.quoted.double.basic.block.kyoml",
                    regex: /"/,
                    next: "pop"
                }, {
                    include: "#interpolation"
                }, {
                    token: "constant.character.escape.kyoml",
                    regex: /\\(?:[btnfr"\\$\/ ]|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/
                }, {
                    token: "invalid.illegal.escape.kyoml",
                    regex: /\\[^btnfr\/"\\$]/
                }, {
                    defaultToken: "string.quoted.double.basic.block.kyoml"
                }]
            }, {
                token: "string.quoted.single.basic.block.kyoml",
                regex: /'/,
                push: [{
                    token: "string.quoted.single.basic.block.kyoml",
                    regex: /'/,
                    next: "pop"
                }, {
                    token: "constant.character.escape.kyoml",
                    regex: /\\(?:[btnfr'\\$\/ ]|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/
                }, {
                    token: "invalid.illegal.escape.kyoml",
                    regex: /\\[^btnfr\/'\\$]/
                }, {
                    defaultToken: "string.quoted.single.basic.block.kyoml"
                }]
            }],
            "#interpolation": [{
                token: "keyword.operator.kyoml",
                regex: /\$\{/,
                push: [{
                    token: "keyword.operator.kyoml",
                    regex: /\}/,
                    next: "pop"
                }, {
                    defaultToken: "string.interpolated.kyoml"
                }]
            }],
            "#comment": [{
                token: [
                    "text",
                    "punctuation.definition.comment.kyoml",
                    "comment.line.number-sign.kyoml"
                ],
                regex: /(\s*)(#)(.*)$/,
                comment: "Comments"
            }],
            "#punctuation": [{
                token: "punctuation.kyoml",
                regex: /,/,
                comment: "general punctuation"
            }],
            "#key_value": [{
                token: "invalid.illegal.noKey.kyoml",
                regex: /\s*=.*$/
            }, {
                token: "invalid.deprecated.noValue.kyoml",
                regex: /\s*[A-Za-z_\-][A-Za-z0-9_\-]*\s*=(?=\s*$)/
            }, {
                token: [
                    "text",
                    "entity.name.tag.kyoml",
                    "text",
                    "punctuation.definition.keyValue.kyoml",
                    "text"
                ],
                regex: /(\s*)([A-Za-z_][A-Za-z0-9_-]*)(\s*)(=)(\s*)/,
                push: [{
                    include: "#data"
                }, {
                    include: "#comment"
                }, {
                    token: "text",
                    regex: /$|\,|\s*(?=\}|[A-Za-z_])/,
                    next: "pop"
                }]
            }],
            "#map_key_value": [{
                token: "invalid.illegal.noKey.kyoml",
                regex: /\s*:.*$/
            }, {
                token: "invalid.deprecated.noValue.kyoml",
                regex: /\s*"[A-Za-z_\-][A-Za-z0-9_\-]*"\s*:(?=\s*$)/
            }, {
                token: [
                    "text",
                    "string.quoted.double.basic.kyoml",
                    "text",
                    "punctuation.definition.keyValue.kyoml",
                    "text"
                ],
                regex: /(\s*)("[A-Za-z_][A-Za-z0-9_-]*")(\s*)(:)(\s*)/,
                push: [{
                    token: "text",
                    regex: /$|\,|\s*(?=\})/,
                    next: "pop"
                }, {
                    include: "#data"
                }, {
                    include: "#comment"
                }]
            }],
            "#directives": [{
                token: "keyword.other.kyoml",
                regex: /[\x003d\x003a]|\|>|<\|/
            }, {
                token: "support.function.kyoml",
                regex: /@\b[a-zA-Z][a-zA-Z0-9_]*\(/,
                push: [{
                    token: "support.function.kyoml",
                    regex: /\)/,
                    next: "pop"
                }, {
                    include: "#data"
                }, {
                    include: "#comment"
                }]
            }, {
                token: "support.function.kyoml",
                regex: /@\b[a-zA-Z][a-zA-Z0-9_]*/
            }],
            "#blocks": [{
                token: [
                    "entity.name.section.kyoml",
                    "text",
                    "punctuation.definition.array.kyoml"
                ],
                regex: /(\b[a-zA-Z][a-zA-Z0-9_]*)(\s*)(\{)/,
                push: [{
                    token: "punctuation.definition.array.kyoml",
                    regex: /\}/,
                    next: "pop"
                }, {
                    include: "#main"
                }]
            }, {
                include: "#key_value"
            }],
            "#illegal": [{
                token: "invalid.illegal.kyoml",
                regex: /[^\s]/
            }]
        }
        
        this.normalizeRules();
    };
    
    kyomlHighlightRules.metaData = {
        fileTypes: ["kyo", "kyoml"],
        name: "kyoml",
        scopeName: "source.kyoml"
    }
    
    
    oop.inherits(kyomlHighlightRules, TextHighlightRules);
    
    exports.kyomlHighlightRules = kyomlHighlightRules;
    });
    
    define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"], function(require, exports, module) {
    "use strict";
    
    var oop = require("../../lib/oop");
    var Range = require("../../range").Range;
    var BaseFoldMode = require("./fold_mode").FoldMode;
    
    var FoldMode = exports.FoldMode = function(commentRegex) {
        if (commentRegex) {
            this.foldingStartMarker = new RegExp(
                this.foldingStartMarker.source.replace(/\|[^|]*?$/, "|" + commentRegex.start)
            );
            this.foldingStopMarker = new RegExp(
                this.foldingStopMarker.source.replace(/\|[^|]*?$/, "|" + commentRegex.end)
            );
        }
    };
    oop.inherits(FoldMode, BaseFoldMode);
    
    (function() {
        
        this.foldingStartMarker = /([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/;
        this.foldingStopMarker = /^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/;
        this.singleLineBlockCommentRe= /^\s*(\/\*).*\*\/\s*$/;
        this.tripleStarBlockCommentRe = /^\s*(\/\*\*\*).*\*\/\s*$/;
        this.startRegionRe = /^\s*(\/\*|\/\/)#?region\b/;
        this._getFoldWidgetBase = this.getFoldWidget;
        this.getFoldWidget = function(session, foldStyle, row) {
            var line = session.getLine(row);
        
            if (this.singleLineBlockCommentRe.test(line)) {
                if (!this.startRegionRe.test(line) && !this.tripleStarBlockCommentRe.test(line))
                    return "";
            }
        
            var fw = this._getFoldWidgetBase(session, foldStyle, row);
        
            if (!fw && this.startRegionRe.test(line))
                return "start"; // lineCommentRegionStart
        
            return fw;
        };
    
        this.getFoldWidgetRange = function(session, foldStyle, row, forceMultiline) {
            var line = session.getLine(row);
            
            if (this.startRegionRe.test(line))
                return this.getCommentRegionBlock(session, line, row);
            
            var match = line.match(this.foldingStartMarker);
            if (match) {
                var i = match.index;
    
                if (match[1])
                    return this.openingBracketBlock(session, match[1], row, i);
                    
                var range = session.getCommentFoldRange(row, i + match[0].length, 1);
                
                if (range && !range.isMultiLine()) {
                    if (forceMultiline) {
                        range = this.getSectionRange(session, row);
                    } else if (foldStyle != "all")
                        range = null;
                }
                
                return range;
            }
    
            if (foldStyle === "markbegin")
                return;
    
            var match = line.match(this.foldingStopMarker);
            if (match) {
                var i = match.index + match[0].length;
    
                if (match[1])
                    return this.closingBracketBlock(session, match[1], row, i);
    
                return session.getCommentFoldRange(row, i, -1);
            }
        };
        
        this.getSectionRange = function(session, row) {
            var line = session.getLine(row);
            var startIndent = line.search(/\S/);
            var startRow = row;
            var startColumn = line.length;
            row = row + 1;
            var endRow = row;
            var maxRow = session.getLength();
            while (++row < maxRow) {
                line = session.getLine(row);
                var indent = line.search(/\S/);
                if (indent === -1)
                    continue;
                if  (startIndent > indent)
                    break;
                var subRange = this.getFoldWidgetRange(session, "all", row);
                
                if (subRange) {
                    if (subRange.start.row <= startRow) {
                        break;
                    } else if (subRange.isMultiLine()) {
                        row = subRange.end.row;
                    } else if (startIndent == indent) {
                        break;
                    }
                }
                endRow = row;
            }
            
            return new Range(startRow, startColumn, endRow, session.getLine(endRow).length);
        };
        this.getCommentRegionBlock = function(session, line, row) {
            var startColumn = line.search(/\s*$/);
            var maxRow = session.getLength();
            var startRow = row;
            
            var re = /^\s*(?:\/\*|\/\/|--)#?(end)?region\b/;
            var depth = 1;
            while (++row < maxRow) {
                line = session.getLine(row);
                var m = re.exec(line);
                if (!m) continue;
                if (m[1]) depth--;
                else depth++;
    
                if (!depth) break;
            }
    
            var endRow = row;
            if (endRow > startRow) {
                return new Range(startRow, startColumn, endRow, line.length);
            }
        };
    
    }).call(FoldMode.prototype);
    
    });
    
    define("ace/mode/kyoml",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/kyoml_highlight_rules","ace/mode/folding/cstyle"], function(require, exports, module) {
    "use strict";
    
    var oop = require("../lib/oop");
    var TextMode = require("./text").Mode;
    var kyomlHighlightRules = require("./kyoml_highlight_rules").kyomlHighlightRules;
    var FoldMode = require("./folding/cstyle").FoldMode;
    
    var Mode = function() {
        this.HighlightRules = kyomlHighlightRules;
        this.foldingRules = new FoldMode();
    };
    oop.inherits(Mode, TextMode);
    
    (function() {
        this.$id = "ace/mode/kyoml"
    }).call(Mode.prototype);
    
    exports.Mode = Mode;
    });                (function() {
                        window.require(["ace/mode/kyoml"], function(m) {
                            if (typeof module == "object" && typeof exports == "object" && module) {
                                module.exports = m;
                            }
                        });
                    })();
                