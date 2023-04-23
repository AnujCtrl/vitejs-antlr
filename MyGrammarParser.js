// Generated from MyGrammar.g4 by ANTLR 4.12.0
// jshint ignore: start
import antlr4 from 'antlr4';
import MyGrammarListener from './MyGrammarListener.js';
const serializedATN = [
  4, 1, 8, 32, 2, 0, 7, 0, 2, 1, 7, 1, 1, 0, 1, 0, 1, 0, 5, 0, 8, 8, 0, 10, 0,
  12, 0, 11, 9, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 19, 8, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 1, 27, 8, 1, 10, 1, 12, 1, 30, 9, 1, 1, 1, 0, 1,
  2, 2, 0, 2, 0, 2, 1, 0, 1, 2, 1, 0, 3, 4, 33, 0, 9, 1, 0, 0, 0, 2, 18, 1, 0,
  0, 0, 4, 5, 3, 2, 1, 0, 5, 6, 5, 7, 0, 0, 6, 8, 1, 0, 0, 0, 7, 4, 1, 0, 0, 0,
  8, 11, 1, 0, 0, 0, 9, 7, 1, 0, 0, 0, 9, 10, 1, 0, 0, 0, 10, 1, 1, 0, 0, 0, 11,
  9, 1, 0, 0, 0, 12, 13, 6, 1, -1, 0, 13, 19, 5, 8, 0, 0, 14, 15, 5, 5, 0, 0,
  15, 16, 3, 2, 1, 0, 16, 17, 5, 6, 0, 0, 17, 19, 1, 0, 0, 0, 18, 12, 1, 0, 0,
  0, 18, 14, 1, 0, 0, 0, 19, 28, 1, 0, 0, 0, 20, 21, 10, 4, 0, 0, 21, 22, 7, 0,
  0, 0, 22, 27, 3, 2, 1, 5, 23, 24, 10, 3, 0, 0, 24, 25, 7, 1, 0, 0, 25, 27, 3,
  2, 1, 4, 26, 20, 1, 0, 0, 0, 26, 23, 1, 0, 0, 0, 27, 30, 1, 0, 0, 0, 28, 26,
  1, 0, 0, 0, 28, 29, 1, 0, 0, 0, 29, 3, 1, 0, 0, 0, 30, 28, 1, 0, 0, 0, 4, 9,
  18, 26, 28,
];

const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map(
  (ds, index) => new antlr4.dfa.DFA(ds, index)
);

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class MyGrammarParser extends antlr4.Parser {
  static grammarFileName = 'MyGrammar.g4';
  static literalNames = [null, "'*'", "'/'", "'+'", "'-'", "'('", "')'"];
  static symbolicNames = [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    'NEWLINE',
    'INT',
  ];
  static ruleNames = ['start', 'expr'];

  constructor(input) {
    super(input);
    this._interp = new antlr4.atn.ParserATNSimulator(
      this,
      atn,
      decisionsToDFA,
      sharedContextCache
    );
    this.ruleNames = MyGrammarParser.ruleNames;
    this.literalNames = MyGrammarParser.literalNames;
    this.symbolicNames = MyGrammarParser.symbolicNames;
    this._syntaxErrors = 0;
  }

  sempred(localctx, ruleIndex, predIndex) {
    switch (ruleIndex) {
      case 1:
        return this.expr_sempred(localctx, predIndex);
      default:
        throw 'No predicate with index:' + ruleIndex;
    }
  }

  expr_sempred(localctx, predIndex) {
    switch (predIndex) {
      case 0:
        return this.precpred(this._ctx, 4);
      case 1:
        return this.precpred(this._ctx, 3);
      default:
        throw 'No predicate with index:' + predIndex;
    }
  }

  start() {
    let localctx = new StartContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, MyGrammarParser.RULE_start);
    var _la = 0;
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 9;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      while (_la === 5 || _la === 8) {
        this.state = 4;
        this.expr(0);
        this.state = 5;
        this.match(MyGrammarParser.NEWLINE);
        this.state = 11;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
      }
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
        this._syntaxErrors++;
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  expr(_p) {
    if (_p === undefined) {
      _p = 0;
    }
    const _parentctx = this._ctx;
    const _parentState = this.state;
    let localctx = new ExprContext(this, this._ctx, _parentState._);
    let _prevctx = localctx;
    const _startState = 2;
    this.enterRecursionRule(localctx, 2, MyGrammarParser.RULE_expr, _p);
    var _la = 0;
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 18;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case 8:
          this.state = 13;
          this.match(MyGrammarParser.INT);
          break;
        case 5:
          this.state = 14;
          this.match(MyGrammarParser.T__4);
          this.state = 15;
          this.expr(0);
          this.state = 16;
          this.match(MyGrammarParser.T__5);
          break;
        default:
          throw new antlr4.error.NoViableAltException(this);
      }
      this._ctx.stop = this._input.LT(-1);
      this.state = 28;
      this._errHandler.sync(this);
      var _alt = this._interp.adaptivePredict(this._input, 3, this._ctx);
      while (_alt != 2 && _alt != antlr4.atn.ATN.INVALID_ALT_NUMBER) {
        if (_alt === 1) {
          if (this._parseListeners !== null) {
            this.triggerExitRuleEvent();
          }
          _prevctx = localctx;
          this.state = 26;
          this._errHandler.sync(this);
          var la_ = this._interp.adaptivePredict(this._input, 2, this._ctx);
          switch (la_) {
            case 1:
              localctx = new ExprContext(this, _parentctx, _parentState);
              this.pushNewRecursionContext(
                localctx,
                _startState,
                MyGrammarParser.RULE_expr
              );
              this.state = 20;
              if (!this.precpred(this._ctx, 4)) {
                throw new antlr4.error.FailedPredicateException(
                  this,
                  'this.precpred(this._ctx, 4)'
                );
              }
              this.state = 21;
              _la = this._input.LA(1);
              if (!(_la === 1 || _la === 2)) {
                this._errHandler.recoverInline(this);
              } else {
                this._errHandler.reportMatch(this);
                this.consume();
              }
              this.state = 22;
              this.expr(5);
              break;

            case 2:
              localctx = new ExprContext(this, _parentctx, _parentState);
              this.pushNewRecursionContext(
                localctx,
                _startState,
                MyGrammarParser.RULE_expr
              );
              this.state = 23;
              if (!this.precpred(this._ctx, 3)) {
                throw new antlr4.error.FailedPredicateException(
                  this,
                  'this.precpred(this._ctx, 3)'
                );
              }
              this.state = 24;
              _la = this._input.LA(1);
              if (!(_la === 3 || _la === 4)) {
                this._errHandler.recoverInline(this);
              } else {
                this._errHandler.reportMatch(this);
                this.consume();
              }
              this.state = 25;
              this.expr(4);
              break;
          }
        }
        this.state = 30;
        this._errHandler.sync(this);
        _alt = this._interp.adaptivePredict(this._input, 3, this._ctx);
      }
    } catch (error) {
      if (error instanceof antlr4.error.RecognitionException) {
        localctx.exception = error;
        this._errHandler.reportError(this, error);
        this._errHandler.recover(this, error);
        this._syntaxErrors++;
      } else {
        throw error;
      }
    } finally {
      this.unrollRecursionContexts(_parentctx);
    }
    function getNumberOfSyntaxErrors() {
      return this._syntaxErrors;
    }
    return localctx;
  }
}

MyGrammarParser.EOF = antlr4.Token.EOF;
MyGrammarParser.T__0 = 1;
MyGrammarParser.T__1 = 2;
MyGrammarParser.T__2 = 3;
MyGrammarParser.T__3 = 4;
MyGrammarParser.T__4 = 5;
MyGrammarParser.T__5 = 6;
MyGrammarParser.NEWLINE = 7;
MyGrammarParser.INT = 8;

MyGrammarParser.RULE_start = 0;
MyGrammarParser.RULE_expr = 1;

class StartContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MyGrammarParser.RULE_start;
  }

  expr = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTypedRuleContexts(ExprContext);
    } else {
      return this.getTypedRuleContext(ExprContext, i);
    }
  };

  NEWLINE = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTokens(MyGrammarParser.NEWLINE);
    } else {
      return this.getToken(MyGrammarParser.NEWLINE, i);
    }
  };

  enterRule(listener) {
    if (listener instanceof MyGrammarListener) {
      listener.enterStart(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof MyGrammarListener) {
      listener.exitStart(this);
    }
  }
}

class ExprContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MyGrammarParser.RULE_expr;
  }

  INT() {
    return this.getToken(MyGrammarParser.INT, 0);
  }

  expr = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTypedRuleContexts(ExprContext);
    } else {
      return this.getTypedRuleContext(ExprContext, i);
    }
  };

  enterRule(listener) {
    if (listener instanceof MyGrammarListener) {
      listener.enterExpr(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof MyGrammarListener) {
      listener.exitExpr(this);
    }
  }
}

MyGrammarParser.StartContext = StartContext;
MyGrammarParser.ExprContext = ExprContext;
