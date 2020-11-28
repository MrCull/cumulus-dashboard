FROM cypress/included:5.5.0
WORKDIR /cumulus-dashboard
COPY localAPI/waitingcypress/wait-for-dashboard.sh wait-for-dashboard.sh
RUN chmod +x wait-for-dashboard.sh
COPY cypress.json cypress.json
COPY cypress cypress/
COPY . ./
RUN npm install

CMD ["/cumulus-dashboard/wait-for-dashboard.sh", "LOCALSTACK_HOST=localhost LOCAL_ES_HOST=localhost CYPRESS_TESTING=true NODE_ENV=test cypress",  "run",  "--spec", "'cypress/integration/*'", "--config", "video=false"]
