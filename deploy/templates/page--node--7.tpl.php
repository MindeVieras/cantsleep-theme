<header>
  <?php if ($page['header']): ?>
      <?php print render($page['header']); ?>
  <?php endif; ?>

  <?php if (!empty($primary_nav)): ?>
    <?php print render($primary_nav) ?>
  <?php endif ?>
</header>

<div class="container">

  <?php if ($page['main']): ?>
      <?php print render($page['main']); ?>
  <?php endif; ?>

</div>

<?php if ($messages): ?>
  <div id="messages"><div class="section clearfix">
    <?php print $messages; ?>
  </div></div> <!-- /.section, /#messages -->
<?php endif; ?>
