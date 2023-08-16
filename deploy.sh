echo "switching to master"
git checkout master

echo "Building app ..."
npm run build

echo "deploying to server"
scp -r build/* thuancomputer@192.168.0.103:/var/www/192.168.0.103/

echo "done"