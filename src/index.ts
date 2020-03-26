/**
 * Main entrypoint for `Namefully`
 *
 * Created on March 26, 2020
 * @author Ralph Florent <ralflornt@gmail.com>
 */
export * from './namefully.module';
export * from './namefully.component';

/**
 * Make the default settings available
 */
export { Config, CONFIG, Parser, version } from 'namefully';

/**
 * Make some models of `Namefully` available
 */
export { Name, Firstname, Lastname, Fullname, Prefix, Suffix, Nama, Namon } from 'namefully';
