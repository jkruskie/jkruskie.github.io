  
Write-Host "Attempting to deploy" 

# Change directory to git
cd $PSScriptRoot

# Build the Vue App
npm run build

# Change directory into the dist folder.
cd dist

# Add the CNAME file for custom domain support
echo 'jkruskie.com' > CNAME

$message = Read-Host -Prompt 'Deploy message: '
cp ../README.md ./README.md

# Initialize and add everything to a new git repository
git init
git add -A
git commit -m $message

# Push to the GitHub repository.
git push -f https://github.com/jkruskie/jkruskie.github.io.git master

# Go back to the starting directory.
cd ..

Write-Host "\n\n\nDeployed properly with message '$message'" 