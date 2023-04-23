// Generated from MyGrammar.g4 by ANTLR 4.12.0
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link MyGrammarParser}.
 */
public interface MyGrammarListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link MyGrammarParser#start}.
	 * @param ctx the parse tree
	 */
	void enterStart(MyGrammarParser.StartContext ctx);
	/**
	 * Exit a parse tree produced by {@link MyGrammarParser#start}.
	 * @param ctx the parse tree
	 */
	void exitStart(MyGrammarParser.StartContext ctx);
	/**
	 * Enter a parse tree produced by {@link MyGrammarParser#expr}.
	 * @param ctx the parse tree
	 */
	void enterExpr(MyGrammarParser.ExprContext ctx);
	/**
	 * Exit a parse tree produced by {@link MyGrammarParser#expr}.
	 * @param ctx the parse tree
	 */
	void exitExpr(MyGrammarParser.ExprContext ctx);
}