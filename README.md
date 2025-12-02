A Vite + TypeScript React application that replicates core Spotify functionality. The app showcases front-end capabilities while serving as a vehicle to demonstrate cloud infrastructure management, deployment automation, and monitoring.

## Architecture

1. **Code Repository:** GitHub
   - All source code is pushed to `main` branch.
2. **CI/CD Pipeline:** GitHub Actions
   - Builds Docker image.
   - Tags image automatically with timestamp.
   - Pushes image to Azure Container Registry (ACR).
3. **Container Registry:** Azure Container Registry (ACR)
   - Stores versioned Docker images.
4. **Cloud Deployment:** Azure Container Apps (ACA)
   - Pulls Docker image from ACR.
   - Runs the container.
   - Health checks ensure uptime.
5. **End Users:** Browser
   - Accesses the live application via public ACA endpoint.

## Live Demo: Publicly Accessible Azure Container App

**React Spotify Clone** deployed as a **containerized app** on **Azure Container Apps** with full CI/CD pipeline:

[https://reactspotifyclone.icyground-a772808d.eastus2.azurecontainerapps.io/](https://reactspotifyclone.icyground-a772808d.eastus2.azurecontainerapps.io/)

## CI/CD Workflow:

1. Push code to main branch triggers GitHub Actions.
2. Docker image is built and tagged with timestamp.
3. Image pushed to Azure Container Registry (ACR).
4. Azure Container Apps (ACA) updated automatically with new image.
5. Health checks and versioning ensure reliability and traceability.

## Security Note:

For demonstration purposes, ACA deployment uses ACR admin credentials.
In production, a managed identity or service principal should be used.

## Monitoring and Logs

![App running in Google Chrome](screenshots/browserimg.png)

![ACA Configuration](screenshots/metrics1.png)

![ACA Configuration (continued)](screenshots/metrics2.png)

![ACA Configuration (last)](screenshots/metrics3.png)

![CPU + Memory Usage + Network Requests](screenshots/metrics4.png)

## Complete Tech Stack

Frontend: React + TypeScript + Vite
Containerization: Docker
Cloud: Azure Container Registry & Azure Container Apps
CI/CD: GitHub Actions
Monitoring: ACA logs + metrics
