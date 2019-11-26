DO $$
BEGIN
  PERFORM internal.ac_add_role('ADMIN', 'app admin');
    EXCEPTION
      WHEN unique_violation THEN
        NULL;
END
$$;
