cd "/Users/polinakolesnikova/Desktop/IM-screens/p5mirror-pk2196/downloads/../p5projects"
#
echo unzip 1 "ims06-paulineium-9EiCMF9cV"
rm -rf "./ims06-paulineium-9EiCMF9cV"
mkdir "./ims06-paulineium-9EiCMF9cV"
pushd "./ims06-paulineium-9EiCMF9cV" > /dev/null
unzip -q "../../downloads/zips/ims06-paulineium-9EiCMF9cV"
popd > /dev/null
#
echo unzip 2 "ims05-paulineium-JU7KZlsY1"
rm -rf "./ims05-paulineium-JU7KZlsY1"
mkdir "./ims05-paulineium-JU7KZlsY1"
pushd "./ims05-paulineium-JU7KZlsY1" > /dev/null
unzip -q "../../downloads/zips/ims05-paulineium-JU7KZlsY1"
popd > /dev/null
#
echo unzip 3 "ims05-paulineium-Z2wnB1GRX"
rm -rf "./ims05-paulineium-Z2wnB1GRX"
mkdir "./ims05-paulineium-Z2wnB1GRX"
pushd "./ims05-paulineium-Z2wnB1GRX" > /dev/null
unzip -q "../../downloads/zips/ims05-paulineium-Z2wnB1GRX"
popd > /dev/null
#
echo unzip 4 "Safe law-msKIwfui3"
rm -rf "./Safe law-msKIwfui3"
mkdir "./Safe law-msKIwfui3"
pushd "./Safe law-msKIwfui3" > /dev/null
unzip -q "../../downloads/zips/Safe law-msKIwfui3"
popd > /dev/null
#
echo unzip 5 "ims03-paulineium-mfF-qYkEJ"
rm -rf "./ims03-paulineium-mfF-qYkEJ"
mkdir "./ims03-paulineium-mfF-qYkEJ"
pushd "./ims03-paulineium-mfF-qYkEJ" > /dev/null
unzip -q "../../downloads/zips/ims03-paulineium-mfF-qYkEJ"
popd > /dev/null
#
echo unzip 6 "ims02-paulineium-IweQ98r2b"
rm -rf "./ims02-paulineium-IweQ98r2b"
mkdir "./ims02-paulineium-IweQ98r2b"
pushd "./ims02-paulineium-IweQ98r2b" > /dev/null
unzip -q "../../downloads/zips/ims02-paulineium-IweQ98r2b"
popd > /dev/null

cd ..
# remove redundant p5.js p5.sound.min.js
rm -f p5projects/*/p5.*
# sync last_updatedAt.txt
cd downloads/json
if [ -e pending_updatedAt.txt ]; then
  rm -f last_updatedAt.txt
  mv pending_updatedAt.txt last_updatedAt.txt
fi