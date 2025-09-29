# Stage 1: Build
FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
WORKDIR /src

# Copy file .csproj (đúng thư mục con)
COPY LearnKing.Api/*.csproj ./LearnKing.Api/
RUN dotnet restore ./LearnKing.Api/LearnKing.Api.csproj

# Copy toàn bộ source code
COPY . .

WORKDIR /src/LearnKing.Api
RUN dotnet publish -c Release -o /app/publish

# Stage 2: Runtime
FROM mcr.microsoft.com/dotnet/aspnet:9.0 AS runtime
WORKDIR /app
COPY --from=build /app/publish .
EXPOSE 86
ENTRYPOINT ["dotnet", "LearnKing.Api.dll"]
