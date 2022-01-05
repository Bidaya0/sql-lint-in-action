import { Query } from "../reader/query";
declare function categorise(query: string): string;
declare function tokenise(query: Query): Query;
declare function extractTableReference(tableReference: string): any;
/**
 * Removes any invalid characters from an unquoted identifier.
 * This can be a database, table, column name etc...
 */
declare function cleanUnquotedIdentifier(identifier: string): string;
export { categorise, tokenise, extractTableReference, cleanUnquotedIdentifier };
