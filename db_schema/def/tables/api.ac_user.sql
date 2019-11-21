CREATE TABLE IF NOT EXISTS api.ac_user (
  user_id            UUID              NOT NULL
    DEFAULT uuid_generate_v1mc(),
  username           TEXT              NOT NULL
    CHECK (length(username) < 512),
  password_hash      TEXT              NOT NULL
    CHECK (length(password_hash) < 512),
  created            TIMESTAMPTZ       NOT NULL
    DEFAULT now(),
  updated            TIMESTAMPTZ       NOT NULL
    DEFAULT now(),

  PRIMARY KEY (user_id),
  UNIQUE (username)
);

COMMENT ON TABLE api.ac_user IS 'An app user';
