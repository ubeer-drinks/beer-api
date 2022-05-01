import {server} from './core/server';

function main() {
    server.listen(server.get('port'), () => console.info(`App is listening at ${server.get('port')}`));
}

main();
