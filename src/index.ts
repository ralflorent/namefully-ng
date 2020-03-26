/**
 * Main entrypoint to `Namefully`
 *
 * Created on March 26, 2020
 * @author Ralph Florent <ralflornt@gmail.com>
 */
export * from './namefully.module';
export * from './namefully.component';
export * from './namefully.pipe';

/**
 * Make the default settings available
 */
export { Namefully, Config, CONFIG, Parser, version } from 'namefully';

/**
 * Make some models/enums of `Namefully` available
 */
export { Name, Firstname, Lastname, Fullname, Prefix, Suffix, Nama, Namon, Separator } from 'namefully';
