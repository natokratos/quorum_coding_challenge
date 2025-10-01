FROM python:3.12.10

RUN mkdir /app && \
        chmod 777 /app && \
        apt-get update && \
        apt-get -y upgrade && \
        install -d -m 0755 /etc/apt/keyrings && \
        apt-get -y install wget sudo which vim && \
        apt-get update && \
        apt-get -y upgrade && \
        apt-get -y --fix-broken install \
          software-properties-common \
          netcat-openbsd \
          telnet

# Configure Poetry
ENV POETRY_VERSION=2.1.3
ENV POETRY_HOME=/opt/poetry
ENV POETRY_VENV=/opt/poetry-venv
ENV POETRY_CACHE_DIR=/opt/.cache

# Install poetry separated from system interpreter
RUN python3 -m venv $POETRY_VENV \
    && $POETRY_VENV/bin/pip install -U pip setuptools \
    && $POETRY_VENV/bin/pip install poetry==${POETRY_VERSION}

# Add `poetry` to PATH
ENV PATH="${PATH}:${POETRY_VENV}/bin"

#COPY cron-init /etc/cron.d/cron-init
COPY ../../containers/backend/entrypoint.sh /tmp/entrypoint.sh
ADD ../../ /app

WORKDIR /app/backend

# Install dependencies
RUN poetry lock && \
        poetry show --tree && \
        poetry install -v && \
        chmod -Rf 777 /tmp/entrypoint.sh

ENTRYPOINT [ "/tmp/entrypoint.sh" ]
