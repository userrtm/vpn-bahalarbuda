FROM pierrezemb/gostatic

ENV PORT=8080

COPY public/ /srv/http/

EXPOSE 8080

CMD ["-port", "8080"]
