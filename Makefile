build: 
	node_modules\.bin\react-scripts build
	mkdir build\app
	move build\static\js build\app	
	move build\index.html build\app
	rmdir build\static
	del /F /Q build\*
	copy plugin-manifest.json build
	node .\updateIndexHtml.js
	cd build && zet pack
.PHONY: build