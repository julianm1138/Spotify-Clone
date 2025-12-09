A Vite + TypeScript React application that replicates core Spotify functionality. The app showcases front-end capabilities while serving as a vehicle to demonstrate cloud infrastructure management, deployment automation, monitoring, containerization using Docker, and container orchestration using Kubernetes.

## Architecture Overview

# Code Repository: GitHub

All source code is pushed to the main branch.

CI/CD Pipeline: GitHub Actions

Builds Docker images.

Tags images automatically with timestamps.

Pushes images to Azure Container Registry (ACR).

Container Registry: Azure Container Registry (ACR)

Stores versioned Docker images for both ACA and Kubernetes deployments.

Cloud Deployment: Azure Container Apps (ACA) & Kubernetes (local WSL2 + KIND)

ACA pulls Docker images from ACR and runs containers in the cloud.

Kubernetes allows local orchestration of Docker containers for testing and demonstration.

Health checks and scaling can be managed via Kubernetes Deployments and Services.

End Users: Browser

Access the live application via the public ACA endpoint, or KIND endpoint.

Set Up Kubernetes Cluster:

Installed KIND (Kubernetes in Docker) within WSL2 (I used Ubuntu terminal) for Windows.

Cluster provides a local environment to test container deployments without using cloud resources.

Containerization:

Docker images built from local code.

Tagged and optionally pushed to Azure Container Registry.

Kubernetes Resources Created:

deployment.yml: defines the deployment of the Spotify container.

Configures replicas, container image, ports, and resource specs.

service.yml: exposes the deployment via a NodePort service for local access.

docker-registry secret: allows Kubernetes to pull images from Azure Container Registry.

Commands Used:

# Apply Kubernetes manifests

kubectl apply -f k8/deployment.yml
kubectl apply -f k8/service.yml

# Check pods and service status

kubectl get pods
kubectl get svc

# View logs for troubleshooting

kubectl logs -f <pod-name>
kubectl describe pod <pod-name>

Logs and describe commands helped diagnose container start issues and verify correct image usage.

Mimics cloud deployment behaviors for CI/CD, scaling, and container orchestration.

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
