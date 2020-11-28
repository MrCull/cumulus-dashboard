FROM cypress/included:5.5.0
WORKDIR /cumulus-dashboard
COPY localAPI/waitingcypress/wait-for-dashboard.sh wait-for-dashboard.sh
RUN chmod +x wait-for-dashboard.sh
COPY package.json package-lock.json ./
RUN npm ci
COPY . ./

ENTRYPOINT ["/cumulus-dashboard/wait-for-dashboard.sh", "npm", "run", "cypress-ci"]
